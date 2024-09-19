import style from "./story.module.css";
import image1 from "../../../../assets/ashley-and-cennedy-img.jpg";
import image2 from "../../../../assets/final-boss-img.jpg";
import image3 from "../../../../assets/grand-escape.jpg";
import image4 from "../../../../assets/adas-call-img.jpg";
import bgGrayImg from "../../../../assets/umbrela-gray-img.png";
import logo from "../../../../assets/logo-gray.png";

export function Story() {
  const storySections =
    "w-full max-w-[75rem] mx-auto px-4 text-[#ffffffe2] flex flex-col lg:flex-row";
  // LEFT STORY
  const leftTitle =
    "text-5xl font-medium shadow-md sm:w-[90%] lg:w-full py-11 pr-11 lg:pl-24 text-[#983ef1]";
  const leftDescription =
    "sm:w-[80%] lg:w-full text-3xl lg:text-2xl py-11 pr-11 lg:pl-24 pt-1 leading-tight lg:leading-snug";
  const leftImage =
    "w-[43.75rem] lg:w-[29.375rem] object-cover h-[25rem] lg:h-auto rounded-[2px] z-50";

  // RIGHT STORY
  const rightTitle = "text-5xl font-medium pl-0 p-11 pr-32 text-[#ff009d]";
  const rightDescription =
    "sm:w-[80%] lg:w-full text-3xl lg:text-2xl pl-0 p-11 lg:pr-24 pt-1 leading-tight lg:leading-snug";
  const rightImage =
    "w-[43.75rem] lg:w-[470px] object-cover h-[25rem] lg:h-auto rounded-[2px] z-50";

  return (
    <>
      <div className="h-full bg-[#000000ec] relative overflow-hidden">
        <img
          className="absolute opacity-10 -right-60 top-52 lg:right-10 lg:top-20"
          src={bgGrayImg}
          alt="umbrela-img"
        />
        {/* STORY EXPLAINED */}
        <section className="pt-[18.75rem] mx-auto mb-20">
          <div className="w-full max-w-[75rem] mx-auto px-4 text-[#ffffffe2]">
            <h1 className="text-5xl sm:text-6xl font-bold uppercase max-w-[85%] sm:max-w-[90%]">
              Have you played the game and are you in the labyrinth of the
              story? Don't worry, we've all been there. <br />
              <span className="text-[#9939f8]">STORY EXPLAINED</span>
            </h1>
            <h2 className="text-4xl font-medium uppercase max-w-[90%] my-20 xl:my-12">
              "An excellent game must also have an excellent story, so let's
              take a closer look at it." <br />
              <span className="text-[#ee4eb1]">Warning: Spoilers</span>
            </h2>
            <p
              className={`text-2xl lg:text-lg font-normal uppercase max-w-[90%] sm:max-w-[80%] my-12 leading-normal sm:leading-tight`}
            >
              It's safe to say that Leon Kennedy has one of the worst Spanish
              vacations known to man in{" "}
              <span className="text-2xl sm:text-[1.2rem] font-bold">
                Resident Evil 4: Remake
              </span>
              . Though he is going there to rescue the President of The United
              States' daughter from an evil cult, it's still a pretty rough
              introduction to Europe for our bishy-haired protagonist. <br />
              But our hero runs the gauntlet of cultists, bio mutants, and other
              large parasitical monstrosities, takes down the big bad at the
              center of it all, rescues his target, and gets out alive. Whilst
              those are the broad strokes, it's worth breaking down the ending
              as there's some interesting stuff getting set up that can be
              missed if you're not paying attention.{" "}
              <span className="text-2xl sm:text-[1.2rem] font-bold">
                For those left wanting more of an explanation as those credits
                rolled, here's the ending to Resident Evil Four Remake,
                explained.
              </span>{" "}
              <br />
              (source: www.thegamer.com)
            </p>
          </div>
        </section>
        {/* STORY DIFFERENT */}
        <section className="lg:py-[6.25rem]  m-auto">
          <div className={storySections}>
            <img
              className={leftImage}
              src={image1}
              alt="ashley-and-cennedy-img"
            />
            <article>
              <h1 className={leftTitle}>
                Is Remake's Ending Different To The Original?
              </h1>
              <p className={leftDescription}>
                The ending of Resident Evil 4: Remake is slightly{" "}
                <span className="font-bold lg:text-[1.3rem]">
                  different from the original.
                </span>{" "}
                There's not too major of a change; Leon still confronts Saddler
                on top of a big rickety metal construction, and Ada lends a
                helping hand once the massive mutant boss fight is ready to wrap
                up. <br />
                However, this time around there are{" "}
                <span className="font-bold lg:text-[1.3rem]">
                  two phases to the fight
                </span>{" "}
                and there's a lot more dialogue getting thrown back and forth
                between Leon and Saddler as they try to tear each other to
                pieces. So here's a quick breakdown of how Leon's Spanish
                vacation wraps up in a neat little bow.
              </p>
            </article>
          </div>
        </section>
        {/* BOSS FIGHT */}
        <section className="lg:py-[6.25rem]  m-auto">
          <div className={storySections}>
            <article>
              <h1 className={rightTitle}>
                The Saddler <br /> Showdown
              </h1>
              <p className={`${style.differentText} ${rightDescription}`}>
                The fight with Saddler is{" "}
                <span>one of two last big action sequences</span>
                before the game ends. <br />
                Throughout the story he's been taunting and toying with Leon,
                using the Plagas larva that was injected into him at the start
                of the game to periodically try and take control. But when the
                <span>parasite is removed from Leon and Ashley</span>, saying
                Saddler is annoyed by this would be an understatement. <br />
                The big bad cult leader is way beyond angry,{" "}
                <span>referring to the act as blasphemy</span> in the final
                fight, deciding that Leon would be better off dead instead of{" "}
                <span>under the cult's control.</span> <br />
                So, in a <span>boss fight with two phases</span> he decides to
                put Mr Kennedy down for good. Turning into his classic{" "}
                <span>multi-limbed nightmare creature form</span> from the old
                games as he chases Leon around, using
                <span>flying Plagas drones</span> to harass Leon if he gets too
                far away. <br />
                After that form is sufficiently worn down, Saddler then mutates
                further into an amorphous blob with the twisted remains of his
                <span>human part encased within its core.</span>
              </p>
            </article>
            <img className={rightImage} src={image2} alt="boss-fight-img" />
          </div>
        </section>
        {/* THE GRAND ESCAPE */}
        <section className="pt-[8.25rem] lg:py-[6.25rem] m-auto relative">
          <img
            className="absolute w-[62.5rem] opacity-5 -right-[100%] xl:right-32 -top-20 z-10"
            src={logo}
            alt="logo-img"
          />
          <div className={storySections}>
            <img className={leftImage} src={image3} alt="grand-escape-img" />
            <article>
              <h1 className={leftTitle}>The Grand Escape</h1>
              <p className={`${style.differentText} ${leftDescription}`}>
                After the fight, things get a little wild.{" "}
                <span>A self-destruct sequence begins</span>, and the Military{" "}
                <span>Base Island is set to explode</span>
                and sink beneath the waves. <br />
                Leon and Ashley dash through a collapsing installation as the
                plagas-infected soldiers either{" "}
                <span>die, become dormant, or have seizures</span>. The
                parasites within apparently have{" "}
                <span>
                  difficulty functioning and coordinating without their Alpha
                  Parasite
                </span>
                controlling them all now that Saddler is dead. <br />
                Ashley and Leon eventually{" "}
                <span>find a jetski at an underground dock</span>
                and use it to flee through flooded tunnels as the base explodes
                and collapses around them. They make it out and watch from a
                distance as it all burns and crumbles, with{" "}
                <span>Los Illuminados seemingly defeated</span>, for now.
              </p>
            </article>
          </div>
        </section>
        {/* ADA'S PHONECALL */}
        <section className="lg:py-[6.25rem] mx-auto">
          <div className={storySections}>
            <article>
              <h1 className={rightTitle}>
                Ada's
                <br /> Phonecall
              </h1>
              <p className={`${style.differentText} t${rightDescription}`}>
                Meanwhile, <span>Ada has a phone call with Wesker</span> where
                she decides to
                <span>betray him</span>. The whole point of her being in the
                area in the first place was to{" "}
                <span>recover a sample of the Las Plagas parasite</span>. <br />
                After tossing Leon the Rocket Launcher,{" "}
                <span>Ada instructs her pilot to fly off</span> as the island is
                destroyed. She talks with Wesker on the phone about her mission
                to recover the parasite, which Umbrella, or rather Wesker, wants
                to exploit, commenting that he'll{" "}
                <span>use it to kill billions</span>. <br />
                Naturally, Ada decides to go against her employer by holding her
                pilot at gunpoint and demanding that he{" "}
                <span>flies the helicopter in a different direction</span>.
              </p>
            </article>
            <img
              className={rightImage}
              src={image4}
              alt="ada's-phone-call-img"
            />
          </div>
        </section>
      </div>
    </>
  );
}
