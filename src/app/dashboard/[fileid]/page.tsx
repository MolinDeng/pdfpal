import ChatWrapper from '@/components/chat/ChatWrapper';
import PdfRenderer from '@/components/PdfRenderer';
import { db } from '@/db';
import { getUserSubscriptionPlan } from '@/lib/stripe';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { notFound, redirect } from 'next/navigation';

interface PageProps {
  params: {
    fileid: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { fileid } = params;

  // make database call here
  const { getUser } = getKindeServerSession();
  const user = getUser();
  if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`);

  // make databse call: find the file
  const file = await db.file.findFirst({
    where: {
      id: fileid,
      userId: user.id,
    },
  });

  if (!file) notFound();

  const plan = await getUserSubscriptionPlan();

  return (
    <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            {/* Main area for pdf viewer
                - We will use react-pdf to render the pdf
                - Or we can embed the pdf using iframe with google docs
            */}
            <PdfRenderer />
            {/* <PdfRenderer url={file.url} /> */}
          </div>
        </div>

        <div className="shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
          <ChatWrapper />
          {/* <ChatWrapper isSubscribed={plan.isSubscribed} fileId={file.id} /> */}
        </div>
      </div>
    </div>
  );
}
