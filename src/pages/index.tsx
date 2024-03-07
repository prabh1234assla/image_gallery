import media1 from "../assets/images/media01.png";
import media2 from "../assets/images/media02.png";
import media3 from "../assets/images/media03.png";
import media4 from "../assets/images/media04.png";
import media5 from "../assets/images/media05.png";
import media6 from "../assets/images/media06.png";
import media7 from "../assets/images/media07.png";
import media8 from "../assets/images/media08.png";
import media9 from "../assets/images/media09.png";
import media10 from "../assets/images/media10.png";

import Slide from "@/components/Slide";
import Link from "next/link";
import { FC } from "react";

export const medias = [media1, media2, media3, media4, media5, media6, media7, media8, media9, media10]

export const bg_colors = [
  'bg-one-100',
  'bg-two-100',
  'bg-three-100',
  'bg-four-100',
  'bg-five-100',
  'bg-six-100',
  'bg-seven-100',
  'bg-eight-100',
  'bg-nine-100',
  'bg-ten-100'
]

export const text_colors = [
  'text-one-200',
  'text-two-200',
  'text-three-200',
  'text-four-200',
  'text-five-200',
  'text-six-200',
  'text-seven-200',
  'text-eight-200',
  'text-nine-200',
  'text-ten-200'
]

export const label_names = [
  'Eagle.',
  'Bio.Tree.',
  'Root.Life.',
  'Zodarkaic.',
  'Flora.',
  'Tampa.',
  'Pikaro.',
  'Crifi.',
  'Vinyl.',
  'Foxy.'
]

export const label_descriptions = [
  "Eagle., an emblematic manifestation of regal prowess and unwavering determination, gracefully unfurls its majestic wings in an orchestration of transcendent elegance, beckoning the discerning connoisseur into a realm where each meticulously crafted product becomes an embodiment of resolute fortitude and soaring distinction, transcending the quotidian into a symphony of unparalleled grandeur.",
  "Bio.Tree., positioned at the confluence of ecological conscientiousness and contemporary ingenuity, stands as a verdant paragon, intricately weaving the tendrils of organic vitality with the threads of modern sustainability, forging an allegory of harmonious coexistence where each product assumes the mantle of an arboreal emissary, disseminating the ethos of a greener, more symbiotic epoch.",
  "Root.Life., a transcendent homage to the botanical tapestry of existence, artfully navigates the intricacies of life's perennial journey, cultivating an allegorical narrative where every product becomes an eloquent proclamation of inherent growth, indomitable resilience, and the sublime aesthetics that manifest in the elegant simplicity of unadorned profundity.",
  "Zodarkaic., an esoteric synthesis of cosmic allure and terrestrial mystique, beckons the intrepid aesthete into the labyrinthine corridors of enigma, where each meticulously curated product becomes an arcane artifact, encapsulating an ineffable fusion of cosmic splendor and terrestrial allure, transcending the conventional boundaries of aesthetic expression.",
  "Flora., an opulent pantheon of natural splendor, orchestrates a resplendent symphony of botanical grandeur, inviting the discerning aficionado to immerse in the kaleidoscopic rhapsody of organic opulence, where each meticulously crafted product serves as a veritable testament to the floriferous bounties that nature graciously bestows.",
  "Tampa., a vibrant paean to urban dynamism and tropical exuberance, transmutes the pulsating energy of city life into a sartorial ode, weaving an intricate tapestry of products that embody the vivacity of the metropolis, blending the cosmopolitan effervescence with the balmy allure of tropical landscapes.",
  "Pikaro., a veritable embodiment of capricious reverie and playful exploration, invites the imaginative sojourner to traverse the whimsical corridors of creative dalliance, where each product becomes an effulgent muse, instigating a kaleidoscopic journey into the realms of fantastical ingenuity and spirited curiosity.",
  "Crifi., an alchemical confluence of artisanal finesse and avant - garde innovation, bequeaths unto the discerning cognoscenti a tableau where each product, an exemplar of functional artistry, blurs the traditional demarcations between utilitarianism and the sublime, forging an aesthetic narrative that transcends the mundane.",
  "Vinyl., an evocative eulogist to the timeless aesthetic, weaves a rich tapestry of nostalgia and cultural resonance, where each meticulously curated product stands as a commemoration to the enduring allure of bygone eras, encapsulating an effulgent narrative that traverses the annals of collective memory and artistic heritage.",
  "Foxy., a captivating anthropomorphic tableau of sly charm and whimsical charisma, emerges as a fount of witty allure, where each meticulously crafted product, an effulgent paragon of cunning playfulness, lends a touch of sophistication and intrigue to the everyday, transforming the quotidian into a canvas of sophisticated whimsy."
]

type Props = {}

const Home: FC<Props> = () => {
  return (
    <main className="bg-[#1E1E1E] overflow-hidden">
      {label_names.map((label, index) => (
        <>
          <Link key={index} href={`/Reveal/${index}`}>
            <Slide media={medias[index].src} label_name={label} text_color={[
              "#FF0101",
              "#FFC700",
              "#FF4B30",
              "#FF7F00",
              "#FF0030",
              "#FE007A",
              "#FF0000",
              "#00E0FF",
              "#FF0355",
              "#FF0000",
            ][index]} bg_color={bg_colors[index]} label_description={label_descriptions[index]} />
          </Link>
        </>
      ))}
    </main>
  );
}

export default Home
