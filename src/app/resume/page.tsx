import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function ResumePage() {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <div className='container py-4 flex flex-col items-center mt-20'>
        {/* PDF Viewer */}
        <div className='w-full max-w-[850px] h-[1100px]'>
          <object
            data='/FlaviuHossuResume.pdf'
            type='application/pdf'
            className='w-full h-full'
          >
            <div className='w-full h-full flex items-center justify-center bg-gray-100 p-4'>
              <p>
                Unable to display PDF file.
                <a
                  href='/resume.pdf'
                  download
                  className='text-blue-600 hover:underline'
                >
                  Download PDF
                </a>
              </p>
            </div>
          </object>
        </div>

        <div className='mt-6'>
          <Button asChild>
            <a
              href='/FlaviuHossuResume.pdf'
              download
              className='flex items-center gap-2'
            >
              <Download className='h-4 w-4' />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
