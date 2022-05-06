import { Widget } from './components/Widget';

export function App() {
  return (
    <>
      <div className='flex flex-row justify-between w-100vw h-16 px-2 bg-zinc-800 sd:px-24'>
        <div className='w-32 m-3 rounded bg-zinc-700'></div>
        <div className='hidden md:flex'>
          <div className='w-24 my-auto mx-2 h-3 rounded bg-zinc-700'></div>
          <div className='w-24 my-auto mx-2 h-3 rounded bg-zinc-700'></div>
          <div className='w-24 my-auto mx-2 h-3 rounded bg-zinc-700'></div>
          <div className='w-24 my-auto mx-2 h-3 rounded bg-zinc-700'></div>
        </div>
        <div className='hidden md:flex place-items-center justify-between'>
          <div className='w-6 h-6 mx-2 rounded bg-zinc-700'></div>
          <div className='w-6 h-6 mx-2 rounded bg-zinc-700'></div>
          <div className='w-6 h-6 mx-2 rounded-full bg-zinc-700'></div>
        </div>
        <div className='flex flex-col md:hidden my-auto'>
          <div className='w-4 my-0.5 mx-2 h-1 rounded bg-zinc-700'></div>
          <div className='w-4 my-0.5 mx-2 h-1 rounded bg-zinc-700'></div>
          <div className='w-4 my-0.5 mx-2 h-1 rounded bg-zinc-700'></div>
        </div>
      </div>
      <section>
        <main className='mobile-main md:mx-10 md:my-10'>
          <div className='md:mx-auto md:w-[70vw] bg-zinc-800 h-24  rounded-md'>
            <p className='text-zinc-400 p-8'>
              Experimente enviar um feedback de um bug na aplicação 🐛
            </p>
          </div>
          <div className='mobile-cols grid md:grid-cols-3 md:gap-6 grid-flow-row-dense w-[70vw] mx-auto my-6'>
            <div className='bg-zinc-800 h-48 rounded-md'></div>
            <div className='bg-zinc-800 h-48 md:col-span-2 rounded-md'></div>
            <div className='bg-zinc-800 h-48 md:col-span-2 rounded-md'></div>
            <div className='bg-zinc-800 h-48 rounded-md'></div>
          </div>
        </main>
      </section>
      <Widget />
    </>
  );
}
