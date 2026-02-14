import React from 'react';

export const LoveMessage: React.FC = () => {
  const message = `I've been sitting here trying to figure out the right words, and I keep coming back to this one word which is my favourite one to describe you, that is, MAGIC.

I often think about the times we got completely lost trying to find places, and instead of getting frustrated, we end up having such awesome times just wandering around and talking. Or how you always know when I've had a rough day before I even say anything, or how you know I would act in a given scenario better than me, or the way you look so absolutely freaking gorgeous all the time without even trying. Magic hi toh hain tu. Absolute magic.

You've changed me in ways I didn't expect. I'm so much more patient, I laugh more easily, and I've started to actually believe in the future we're building together. Before you, I wasn't sure what I was looking for. Now I know, it was you the whole time.

What I want you to know on Valentine's Day is that I love you like a maniac (aur koi option chhoda bhi nahi tu ne). Who Kal Ho Naa Ho ka dialogue hain na, ekdum tere liye hi bana hain. Koi mere jitna pyaar nahi kar sakta, kyunki kisi ke paas tu nahi hain. I see how hard you work, how much you care about the people around you, and how you somehow manage to make me feel like the most important person in the world. I see the countless little things you do that you might think go unnoticed, but they don't. I can't help but keep falling for you more and more.

I'm not perfect at showing you how much you mean to me. But I'm so grateful for you every single day. For your patience when we are apart, for your laugh that always catches me off guard, for the way you just get me.

Here's to all the adventures we haven't had yet, all the steamy mornings still to come, and all the random beautiful magical moments in between. I can't wait to keep building this life with you mere Chotu hottie baby.

Happy Valentine's Day My Everything`;

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-5 text-9xl text-rose-100 opacity-30 font-script select-none">„</div>
      <div className="absolute bottom-10 right-5 text-9xl text-rose-100 opacity-30 font-script select-none rotate-180">"</div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-rose-100 border border-rose-100/50 p-12 md:p-16">
          <p className="font-script text-2xl md:text-3xl leading-relaxed text-rose-900 text-justify whitespace-pre-line">
            {message}
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
