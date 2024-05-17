import CardGrid from "@/components/CardGrid";
import AlternateHeader from "@/components/blocks/AlternateHeader";
import { Event } from "@/components/models/events/datatype";
import { authOptions } from "@/lib/auth";
import { ATTENDEES_DJANGO_URL, EVENTS_DJANGO_URL } from "@/lib/constants/be";

import eventsData from "@/public/assets/content/Events/content.json";

import FeatureRule from "@/public/assets/content/feature.rule.json";
import bkFetch from "@/services/backend.services";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Extended Events",
};
const Events = async ({ hidden }: { hidden: boolean }) => {
  async function fetchData(url: string, options: any) {
    const response = await bkFetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }
  async function getData() {
    const [events, attendees] = await Promise.all([
      fetchData(EVENTS_DJANGO_URL + "?page_size=50", { method: "GET" }),
      fetchData(ATTENDEES_DJANGO_URL, { method: "GET" }),
    ]);

    return {
      events,
      attendees,
    };
  }

  const { events, attendees } = await getData();

  return (
    <CardGrid
      gridData={{
        title: eventsData.title,
        description: eventsData.description,
        events: hidden
          ? events
          : {
              ...events,
              results: events.results.filter((e: Event) => e.slug !== "hidden"),
            }, // if hidden flag true then show hidden events
        attendees: attendees,
      }}
      type='Events'
    ></CardGrid>
  );
};
async function Contest({ searchParams }: { searchParams: { hidden: string } }) {
  const disabledEventsContent = FeatureRule.disabledEventsContent;
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  else
    return (
      <>
        <section className='flex flex-col w-full max-w-6xl mx-auto space-y-8'>
          <section className='flex flex-col local-container gap-6 p-4 space-y-4'>
            {!disabledEventsContent.events ? (
              <AlternateHeader
                title={eventsData.title}
                color={eventsData.color}
                description={eventsData.description}
              />
            ) : (
              <>
                <Suspense
                  fallback={
                    <div className='flex items-center gap-x-2'>
                      <Loader2 className='h-4 w-4 animate-spin' /> Loading
                      events...
                    </div>
                  }
                >
                  <Events
                    hidden={
                      (searchParams.hidden == "true" ? true : false) || false
                    }
                  />
                </Suspense>
              </>
            )}
          </section>
        </section>
      </>
    );
}

export default Contest;
