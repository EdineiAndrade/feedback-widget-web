import React from 'react'
import { CloseButton } from './CloseButton';

import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import otherImageUrl from '../assets/other.svg'

const feedbackTypes={
    BUG:{
        title:'Problems',
        image:{
            source:bugImageUrl,
            alt:'imagem de um inseto'
        }
    },
    IDEA:{
        title:'Idea',
        image:{
            source:ideaImageUrl,
            alt:'imagem de uma lampada'
        }
    },
    OTHER:{
        title:'Other',  
        image:{
            source:otherImageUrl,
            alt:'imagem de um balao'
        }
    }
}

export function WidgetForm() {
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            <header>
                <span className='text-xl leading-6'>Deixe seu Feedback </span>
                <CloseButton/>
            </header>

           <div className='flex py-8 gap-2 w-full'>
               {Object.entries(feedbackTypes).map(([key,value]) =>{
                   return(
                       <button 
                       className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
                       type='button'>
                           <img src={value.image.source} alt={value.image.alt} />
                       </button>
                   );
               })}
           </div>


            <footer className='text-xs text-neutral-400'>
                Feico com :) pela <a className='underline underline-offset-2' href="https://rocketseat.com.br">Rocketseat</a>
            </footer>

        </div>
    );
}
