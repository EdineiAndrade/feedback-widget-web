import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes} from "..";
import { CloseButton } from "../../CloseButton";
import { ScreensHotButton } from "../ScreensHotButton";

interface FeedbackContentStepProps{
    feedbackType:FeedbackType;
    onFeedbackRestartRequested:() =>void;
    onFeedbackSent:() =>void;
}

export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent,
     }:FeedbackContentStepProps){
    const [screenshot, setScreenshot] =useState< string | null> (null);
    const [comment, setComment] =useState('');

    const feedbackTypeInfo=feedbackTypes[feedbackType];
    
    function handleSubmitFeedback(event:FormEvent){
        event.preventDefault()

        console.log({ 
            screenshot,
            comment,
        })
        onFeedbackSent();

    }
    
    return(
        <>
            <header>

                <button type="button" className="top-5 lef-5 absolute flex items-center" onClick={onFeedbackRestartRequested}>
                    <ArrowLeft weight="bold" className="w-4 h-4"/>
                </button>
                    <span className='text-xl leading-6 flex items-center gap-2 '>
                        <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
                        {feedbackTypeInfo.title}
                    </span>
                   
                   
                    <CloseButton/>
            </header>

            <form onSubmit={handleSubmitFeedback} className='my-4 w-full'>
                <textarea
                 className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-400 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                 placeholder=" Conte com detalhes o que está acontecendo..."
                onChange={event =>setComment(event.target.value)}
                >
                   
                </textarea>
                
                <footer className="flex gap-2 mt-2">
                    <ScreensHotButton
                        screenshot={screenshot}
                        onScreenHootTook={setScreenshot}
                    />
                    <button 
                    type="submit"
                    disabled={comment.length === 0}
                    className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-offset-brand-500 disabled:opacity-50 disabled:bg-brand-500">
                            Enviar Feedback
                    </button>
                    
                </footer>

            </form>
           </>
    )
}