import { ArrowRight } from 'lucide-react';

export default function LeftPanel() {
    return (
      <div className="px-6 w-2/3">
        <div className="flex flex-col border-t border-zinc-200">
            <div className="flex flex-row text-10xl">
                <div className="font-medium">
                    <div>Evolution</div>
                    <div className="-mt-16">Accelerated</div> {/* Adjust the margin as needed */}
                </div>
                <div className="ml-12 text-lg">0 - 1</div>
            </div>
            <div className="flex flex-col mt-4">
                <div className="flex">
                    <div className="border-t border-zinc-200 flex items-center">
                        <button className="flex pt-2">
                            Learn More
                            <ArrowRight className="ml-96" size={16} />
                        </button>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="flex mt-16 px-8">
                    <div className="flex-1"> </div>
                    <div className="flex-1"> </div>    
                    <div className="flex-1"> </div>
                    <div className="flex-1 text-right pr-8">Who we are:</div>
                    <div className="flex-1 rounded-lg text-zinc-500 font-normal">
                        Empath is a team of highly-technical engineers and scientists combining the best of software and hardware to unlock the next frontier of non-invasive human-computer interaction.
                    </div>
                </div>
            </div>
            <div className="flex-grow">
            </div>
        </div>
      </div>
    );
}