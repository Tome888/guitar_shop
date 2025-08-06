const guitarsData = [
  {
    id: "f1",
    name: "Stratocaster",
    type: "ELECTRIC",
    image: "/guitars_images/9235000560_gtr_frt_001_rr.png",
    description:
      "The Fender Stratocaster is an iconic electric guitar known for its contoured body, bright and versatile tone, and smooth playability. Introduced in 1954, it's been favored by countless legendary guitarists across genres, especially rock and blues.",
    price: 2000,
    brandId: "3",
  },
  {
    id: "f2",
    name: "Telecaster",
    type: "ELECTRIC",
    image: "/guitars_images/9236091070_fcs_ins_frt_1_rr.png",
    description:
      "The Fender Telecaster is one of the world’s first mass-produced solid-body electric guitars, introduced in the early 1950s. Known for its bright, cutting tone and simple, durable design, the Telecaster has been a favorite among country, rock, blues, and indie musicians. Its distinctive twang and minimalist aesthetic make it a timeless classic.",
    price: 5330,
    brandId: "1",
  },
  {
    id: "f3",
    name: "Jazz Bass",
    type: "BASS",
    image:
      "/guitars_images/Fender-American-Professional-II-Jazz-Bass-Black.png",
    description:
      "The Fender Jazz Bass, introduced in 1960, is known for its smooth feel, rich low end, and versatile tone. Designed for jazz musicians but quickly adopted across genres like funk, rock, and soul, it features a slimmer neck and dual single-coil pickups, making it a go-to bass for expressive, articulate playing.",
    price: 1030,
    brandId: "4",
  },
  {
    id: "f4",
    name: "Mustang",
    type: "ELECTRIC",
    image: "/guitars_images/0144040502_fen_ins_frt_1_rr.jpg",
    description:
      "The Fender Mustang is a short-scale electric guitar originally introduced in the 1960s for student players. Its punchy tone, quirky offset body, and unique switching system have made it a favorite in alternative and indie rock circles.",
    price: 1200,
    brandId: "9",
  },
  {
    id: "f5",
    name: "Jaguar",
    type: "ELECTRIC",
    image: "/guitars_images/0140903506_fen_ins_frt_1_rr.jpg",
    description:
      "The Fender Jaguar is an offset electric guitar known for its short scale, bright tone, and complex switching system. Introduced in the 1960s and later adopted by punk and indie musicians for its raw sound and unique feel.",
    price: 1400,
    brandId: "5",
  },
  {
    id: "f6",
    name: "Precision Bass",
    type: "BASS",
    image: "/guitars_images/0190100806_gtr_frt_001_rr.jpg",
    description:
      "The Fender Precision Bass, or P-Bass, was the first mass-produced electric bass guitar. Known for its punchy tone and simplicity, it's a cornerstone of rock, funk, and soul music, favored for its reliability and straightforward playability.",
    price: 1150,
    brandId: "7",
  },
  {
    id: "f7",
    name: "Duo-Sonic",
    type: "ELECTRIC",
    image: "/guitars_images/0144012581_fen_ins_frt_1_rr.jpg",
    description:
      "Originally launched as a student model in the 1950s, the Duo-Sonic has grown into a cult classic. With its compact size, short scale, and crisp tone, it’s a favorite among indie and garage rock players for its simplicity and charm.",
    price: 999,
    brandId: "5",
  },
  {
    id: "f8",
    name: "Jazzmaster",
    type: "ELECTRIC",
    image: "/guitars_images/0114000700_fen_ins_frt_1_rr.jpg",
    description:
      "The Fender Jazzmaster was originally designed for jazz musicians, but quickly found popularity among surf rockers and alt/indie bands for its mellow tone, offset body, and floating tremolo system.",
    price: 1600,
    brandId: "3",
  },
  {
    id: "f9",
    name: "Meteora",
    type: "ELECTRIC",
    image: "/guitars_images/0147322370_fen_ins_frt_1_rr.jpg",
    description:
      "The Fender Meteora is a bold, modern offset guitar introduced as part of Fender’s Parallel Universe series. It combines vintage vibes with contemporary specs, offering a unique shape and dynamic sound perfect for experimental and indie players.",
    price: 1499,
    brandId: "1",
  },
  {
    __typename: "Model",
    id: "i1",
    name: "RG550",
    type: "ELECTRIC",
    image: "/guitars_images/p_region_RG550_EB_00_04.png",
    description:
      "The Ibanez RG550 is an iconic shred guitar first released in 1987 as part of the original RG series. Designed for speed, precision, and versatility, it features a super-fast Wizard neck, high-output pickups, and a double-locking tremolo system. With its aggressive tone and ergonomic body, the RG550 became a favorite among metal and progressive guitarists worldwide.",
    price: 1500,
    brandId: "7",
  },
  {
    __typename: "Model",
    id: "i2",
    name: "Artcore AS73",
    type: "ELECTRIC",
    image: "/guitars_images/p_region_AS73_TBC_5B_06.png",
    description:
      "The Ibanez Artcore AS73 is a semi-hollow electric guitar that blends warm, resonant tone with rock-ready playability. Featuring a classic double-cutaway design, maple body, and dual humbuckers, the AS73 delivers smooth jazz cleans, bluesy warmth, and even gritty rock tones. Its comfortable neck and vintage-inspired looks make it a versatile favorite for players of all styles.",
    price: 13000,
    brandId: "1",
  },
  {
    __typename: "Model",
    id: "i3",
    name: "SR500",
    type: "BASS",
    image: "/guitars_images/p_region_GSR105EX_BK_1P_02.png",
    description:
      "The Ibanez SR500 is a modern electric bass designed for fast playability, tonal versatility, and sleek aesthetics. Part of the renowned Soundgear series, it features a slim, contoured body, fast 5-piece neck, and powerful Bartolini pickups. The SR500 is ideal for players who want comfort, clarity, and dynamic tone across genres like rock, funk, metal, and jazz.",
    price: 14000,
    brandId: "7",
  },
  {
    __typename: "Model",
    id: "i4",
    name: "AEWC32FM",
    type: "ACOUSTIC",
    image: "/guitars_images/p_region_AEWC32FM_ASF_5B_09.png",
    description:
      "The Ibanez AEWC32FM is a modern acoustic-electric guitar built for comfort and stage-ready performance. Featuring a slim, contoured body with a flamed maple top and sapele back and sides, it delivers a balanced, warm tone with eye-catching aesthetics. Its smooth AEWC body shape and Ibanez electronics make it ideal for players seeking easy playability and amplified acoustic clarity.",
    price: 10500,
    brandId: "2",
  },
  {
    __typename: "Model",
    id: "g1",
    name: "Les Paul Standard",
    type: "ELECTRIC",
    image:
      "/guitars_images/cropped-custom-shop-les-paul-standard-1959-2h-ht-rw-144189.png",
    description:
      "The Gibson Les Paul is one of the most iconic electric guitars in music history. Introduced in the early 1950s, it features a solid mahogany body with a carved maple top, dual humbuckers, and a set neck for rich sustain and powerful tone. Revered across genres from rock and blues to metal, the Les Paul is known for its warmth, depth, and legendary legacy.",
    price: 8000,
    brandId: "2",
  },
  {
    __typename: "Model",
    id: "g2",
    name: "SG Standard",
    type: "ELECTRIC",
    image: "/guitars_images/sg-standard-61-stop-bar-vc-1-1-png",
    description:
      "The Gibson SG (Solid Guitar) is a bold, lightweight electric guitar introduced in 1961 as a successor to the Les Paul. Known for its aggressive tone, fast neck, and distinctive double-cutaway horns, the SG has been a staple in rock, metal, and punk. Its raw sound and sleek design make it a favorite for high-energy stage performance and hard-hitting riffs.",
    price: 5000,
    brandId: "10",
  },
  {
    __typename: "Model",
    id: "g3",
    name: "ES-335",
    type: "ELECTRIC",
    image:
      "/guitars_images/cropped-custom-shop-historic-es335-reissue-1961-2h-ht-rw-169748.png",
    description:
      "The Gibson ES-335 is a semi-hollow body electric guitar that blends the warmth of a hollowbody with the sustain and feedback resistance of a solidbody. Introduced in 1958, its distinctive shape, smooth tone, and versatile character have made it a favorite across blues, jazz, rock, and soul. Known for its creamy cleans and expressive midrange, the ES-335 is both elegant and powerful.",
    price: 1000,
    brandId: "7",
  },
  {
    __typename: "Model",
    id: "g4",
    name: "J-45",
    type: "ACOUSTIC",
    image:
      "/guitars_images/cropped-j-45-studio-rosewood-modern-2024-dreadnought-epicea-palissandre-rw-206488.png",
    description:
      "The Gibson J-45, known as the 'workhorse' of acoustic guitars, is celebrated for its warm, balanced tone and exceptional versatility. Introduced in the late 1940s, its round-shoulder dreadnought body delivers rich lows and sparkling highs, making it a favorite among singer-songwriters, folk, and blues players. The J-45 combines classic looks with powerful, resonant sound.",
    price: 5000,
    brandId: "10",
  },
  {
    __typename: "Model",
    id: "g5",
    name: "Thunderbird Bass",
    type: "BASS",
    image:
      "/guitars_images/cropped-custom-shop-gene-simmons-eb-0-bass-ltd-signature-rw-202079.png",
    description:
      "The Gibson Thunderbird Bass is a bold and distinctive instrument known for its unique reverse body design and powerful, punchy tone. Introduced in the 1960s, it features a mahogany body, neck-through construction, and humbucking pickups that deliver deep lows and aggressive mids. Favored by rock, punk, and metal bassists, the Thunderbird combines striking looks with versatile sound and excellent playability.",
    price: 6000,
    brandId: "3",
  },
  {
    __typename: "Model",
    id: "prs1",
    name: "Custom 24",
    type: "ELECTRIC",
    image:
      "/guitars_images/cropped-custom-24-08-usa-2024-2h-trem-rw-215774.png",
    description: null,
    price: 1070,
    brandId: "6",
  },
  {
    __typename: "Model",
    id: "prs2",
    name: "McCarty 594",
    type: "ELECTRIC",
    image: "/guitars_images/mccarty-model-prs-1920.png",
    description:
      "The PRS McCarty 594 is a vintage-inspired guitar that combines classic tones with modern playability. Featuring a thicker, more rounded neck and a mahogany body topped with figured maple, it offers warm, rich tones with enhanced sustain and resonance. Equipped with specially designed 58/15 LT pickups, the McCarty 594 is ideal for players seeking a versatile instrument for blues, jazz, and rock.",
    price: 1700,
    brandId: "5",
  },
  {
    __typename: "Model",
    id: "prs3",
    name: "SE A50E",
    type: "ACOUSTIC",
    image: "/guitars_images/straight1SEAlexLifeson.png",
    description:
      "The PRS SE A50E is an affordable, versatile acoustic-electric guitar designed for beginners and intermediate players. Featuring a solid mahogany top, back, and sides, it delivers warm, balanced tones with excellent projection. Equipped with PRS’s proprietary piezo pickup and preamp system, the A50E is perfect for both unplugged practice and live amplified performances.",
    price: 1900,
    brandId: "3",
  },
  {
    __typename: "Model",
    id: "prs4",
    name: "SE Kingfisher",
    type: "BASS",
    image: "/guitars_images/PRS-Kestrel-SE-Bass-1-1.png",
    description:
      "The PRS SE Kingfisher is a compact, travel-friendly acoustic guitar designed for players on the go. Featuring a solid Sitka spruce top and mahogany back and sides, it delivers a clear, balanced tone with impressive projection for its size. The Kingfisher’s small body and shorter scale length make it comfortable to play while maintaining PRS’s signature quality and craftsmanship.",
    price: 1700,
    brandId: "6",
  },
  {
    __typename: "Model",
    id: "martin1",
    name: "D-28",
    type: "ACOUSTIC",
    image:
      "/guitars_images/cropped-d-28-standard-dreadnought-epicea-palissandre-eb-58587.png",
    description:
      "The Martin D-28 is a legendary dreadnought acoustic guitar known for its powerful, balanced tone and exceptional projection. Since its introduction in the 1930s, the D-28 has been a favorite among bluegrass, folk, and country musicians. Featuring a solid Sitka spruce top with East Indian rosewood back and sides, it offers rich lows, clear highs, and a warm midrange that defines the classic Martin sound.",
    price: 300,
    brandId: "8",
  },
  {
    __typename: "Model",
    id: "martin2",
    name: "000-15M",
    type: "ACOUSTIC",
    image: "/guitars_images/D-19-190th-Anniversary_frontal.png",
    description:
      "The Martin 000-15M is a classic small-bodied acoustic guitar known for its warm, mellow tone and all-mahogany construction. With its comfortable 000-size body and satin finish, it offers a rich midrange and smooth response, making it ideal for fingerstyle players and blues enthusiasts seeking a vintage vibe and intimate sound.",
    price: 200,
    brandId: "3",
  },
  {
    __typename: "Model",
    id: "martin3",
    name: "LX1E Little Martin",
    type: "ACOUSTIC",
    image: "/guitars_images/Martin_OM-45_2025_s.png",
    description:
      "The Martin LX1E Little Martin is a compact and portable acoustic-electric guitar designed for travel and casual play. With its solid Sitka spruce top and high-pressure laminate (HPL) back and sides, it delivers surprisingly rich, full-bodied tone for its size. Equipped with Fishman electronics, the LX1E offers great amplified sound, making it a favorite among beginners and gigging musicians on the move.",
    price: 100,
    brandId: "7",
  },
  {
    __typename: "Model",
    id: "yamaha1",
    name: "FG800",
    type: "ACOUSTIC",
    image: "/guitars_images/FG800J+Front.png",
    description:
      "The Yamaha FG800 is a highly regarded entry-level dreadnought acoustic guitar known for its excellent build quality, balanced tone, and affordability. Featuring a solid Sitka spruce top and nato back and sides, it delivers clear highs, warm mids, and strong lows, making it a favorite for beginners and experienced players alike. The FG800 offers great playability and rich sound for a variety of musical styles.",
    price: 4300,
    brandId: "6",
  },
  {
    __typename: "Model",
    id: "yamaha2",
    name: "PAC112V (Pacifica)",
    type: "ELECTRIC",
    image:
      "/guitars_images/40442_yamaha_pacp12mbbb_Yamaha-PACP12M-BBB-Acclaim-THUMB.png",
    description:
      "The Yamaha PAC112V Pacifica is a versatile and affordable electric guitar featuring a solid alder body, bolt-on maple neck with rosewood fingerboard, and an H/S/S pickup configuration with coil-splitting capability. Known for its balanced tone, smooth playability, and wide tonal range, the PAC112V is ideal for beginners and intermediate players across genres like rock, blues, and pop. Its vintage-style vibrato bridge and quality construction make it a reliable choice at an excellent value.",
    price: 1600,
    brandId: "5",
  },
  {
    __typename: "Model",
    id: "yamaha3",
    name: "TRBX304",
    type: "BASS",
    image:
      "/guitars_images/35995_yamaha_trb1006jcb_YAMAHA-TRB1006J_CB-ACCLAIM-THUMB.png",
    description:
      "The Yamaha TRBX304 is a versatile 4-string electric bass guitar designed for players seeking a balance between performance and affordability. Featuring a sculpted solid mahogany body and a 5-piece maple/mahogany neck, it delivers a rich, resonant tone suitable for various musical styles. Equipped with Yamaha's exclusive Performance EQ active circuitry, the TRBX304 offers five performance-tuned EQ curves and a 2-band master equalizer, providing instant access to a wide range of tones. Its sleek design, combined with hum-canceling pickups and a comfortable neck profile, ensures both aesthetic appeal and playability",
    price: 1070,
    brandId: "8",
  },
  {
    __typename: "Model",
    id: "yamaha4",
    name: "C40",
    type: "CLASSICAL",
    image: "/guitars_images/36082_yamaha_gc12c_YAMAHA-GC12C-ACCLAIM-THUMB.png",
    description:
      "The Yamaha C40 is a full-size classical guitar renowned for its exceptional value, making it an ideal choice for beginners and students. Crafted with a solid spruce top and meranti back and sides, it delivers a rich, balanced tone suitable for various musical styles. The rosewood fretboard and bridge enhance its warm sound, while the durable construction ensures long-lasting playability. With its affordable price point and quality craftsmanship, the C40 stands out as a reliable instrument for those starting their musical journey.",
    price: 8000,
    brandId: "2",
  },
  {
    __typename: "Model",
    id: "gretsch1",
    name: "G6120T-59 Vintage Select",
    type: "ELECTRIC",
    image: "/guitars_images/gretsch-electromatic-5420t-review.png",
    description:
      "The Gretsch G6120T-59 Vintage Select '59 Chet Atkins Hollow Body with Bigsby is a meticulously crafted reissue of the iconic 1959 model, designed to capture the essence of Gretsch's storied past. This instrument combines vintage aesthetics with modern playability, making it a standout choice for discerning musicians.",
    price: 1300,
    brandId: "6",
  },
  {
    __typename: "Model",
    id: "gretsch2",
    name: "G5420T Electromatic",
    type: "ELECTRIC",
    image: "/guitars_images/2816939560_gre_ins_frt_1_rr.png",
    description:
      "The Gretsch G5420T Electromatic Classic Hollow Body Single-Cut with Bigsby is a refined hollow-body electric guitar that blends vintage aesthetics with modern playability. Crafted with a laminated maple body and featuring Gretsch's signature trestle block bracing, this guitar delivers a focused tone with enhanced sustain and reduced feedback. Equipped with FT-5E Filter'Tron pickups, it offers a rich, full-bodied sound with classic Gretsch chime. The inclusion of a Bigsby B60 vibrato tailpiece allows for expressive pitch modulation, making it a versatile choice for various musical styles.",
    price: 13000,
    brandId: "3",
  },
  {
    __typename: "Model",
    id: "gretsch3",
    name: "Rancher G5034TFT",
    type: "ACOUSTIC",
    image: "/guitars_images/2714014556_gre_ins_frt_01_rr_2048x.png",
    description:
      "The Gretsch G5034TFT Rancher™ is a distinctive dreadnought acoustic-electric guitar that combines vintage aesthetics with modern features. It is part of the Gretsch Rancher™ series, known for its unique triangular soundhole and bold design. This model is equipped with a Fideli'Tron™ humbucking pickup and a Bigsby® B70G tailpiece, offering versatility for both acoustic and amplified performances.",
    price: 643,
    brandId: "10",
  },
  {
    __typename: "Model",
    id: "epiphone1",
    name: "Les Paul Standard",
    type: "ELECTRIC",
    image: "/guitars_images/lp.png",
    description:
      "The Epiphone Les Paul Standard is a renowned electric guitar that offers classic Les Paul aesthetics and tone at an accessible price point. Part of Epiphone's 'Inspired by Gibson' collection, it faithfully recreates the look, feel, and sound of the early 1960s-era Les Pauls. This model is available in two main configurations: the '50s and '60s editions, each reflecting the distinctive features of their respective eras",
    price: 10400,
    brandId: "1",
  },
  {
    __typename: "Model",
    id: "epiphone2",
    name: "Casino",
    type: "ELECTRIC",
    image: "/guitars_images/lg_3676a958cbc6334889f32950d6a3461b.png",
    description:
      "The Epiphone Casino is a legendary hollow-body electric guitar that has been a staple in rock and roll since its introduction in 1961. Notably favored by John Lennon, George Harrison, and Paul McCartney of The Beatles, the Casino is renowned for its distinctive tone and classic design.",
    price: 10500,
    brandId: "10",
  },
  {
    __typename: "Model",
    id: "epiphone3",
    name: "DR-100",
    type: "ACOUSTIC",
    image:
      "/guitars_images/cropped-pro-1-acoustic-dreadnought-epicea-acajou-108628.png",
    description:
      "The Epiphone DR-100 is a classic acoustic guitar that has been a staple in the rock and roll scene since its introduction in 1961. This model is known for its distinctive tone and classic design, featuring a solid Sitka spruce top and mahogany back and sides. Its vintage-style bridge and high-quality construction make it a reliable choice for both acoustic and amplified performances.",
    price: 1030,
    brandId: "6",
  },
  {
    __typename: "Model",
    id: "epiphone4",
    name: "Toby Standard IV",
    type: "BASS",
    image: "/guitars_images/cropped-eb-0-sg-bass-rw-57847.png",
    description:
      "The Epiphone Toby Standard IV is a classic bass guitar that has been a staple in the rock and roll scene since its introduction in 1961. This model is known for its distinctive tone and classic design, featuring a solid Sitka spruce top and walnut back and sides. Its vintage-style bridge and high-quality construction make it a reliable choice for both acoustic and amplified performances.",
    price: 1300,
    brandId: "9",
  },
  {
    __typename: "Model",
    id: "jackson1",
    name: "Soloist SLX",
    type: "ELECTRIC",
    image: "/guitars_images/2910135539_gtr_frt_001_rr.png",
    description:
      "The Jackson X Series Soloist SLX DX is a high-performance electric guitar designed for modern rock and metal players seeking speed, comfort, and aggressive tone at an accessible price point. Part of Jackson’s X Series, it combines classic design elements with contemporary features to deliver a versatile instrument suitable for both rhythm and lead playing.",
    price: 1200,
    brandId: "9",
  },
  {
    __typename: "Model",
    id: "jackson2",
    name: "Rhoads RRX24",
    type: "ELECTRIC",
    image: "/guitars_images/2913636552_jac_ins_frt_1_rr.png",
    description:
      "The Jackson X Series Rhoads RRX24 is a high-performance electric guitar that pays homage to the iconic Randy Rhoads model while incorporating modern enhancements tailored for today's metal and hard rock players. This guitar combines aggressive aesthetics with cutting-edge features to deliver exceptional tone and playability.",
    price: 1400,
    brandId: "3",
  },
  {
    __typename: "Model",
    id: "jackson3",
    name: "JS Series Concert Bass JS3",
    type: "BASS",
    image: "/guitars_images/2919011568_gtr_frt_001_rr.png",
    description:
      "The Jackson JS Series Concert Bass JS3 is a four-string electric bass guitar designed to deliver powerful tone and exceptional playability, making it an excellent choice for bassists seeking a high-quality instrument at an affordable price.",
    price: 1500,
    brandId: "8",
  },
  {
    __typename: "Model",
    id: "mm1",
    name: "StingRay Special",
    type: "BASS",
    image: "/guitars_images/instrument-82.png",
    description:
      "The Ernie Ball Music Man StingRay Special is a modern evolution of the iconic StingRay bass, first introduced in 1976. Renowned for its powerful tone and active electronics, the StingRay Special retains its classic features while incorporating contemporary enhancements for improved performance and comfort.",
    price: 1500,
    brandId: "4",
  },
  {
    __typename: "Model",
    id: "mm2",
    name: "Axis Super Sport",
    type: "ELECTRIC",
    image: "/guitars_images/instrument-105.png",
    description:
      "The Axis Super Sport features a lightweight basswood body with a striking figured maple top, providing both aesthetic appeal and tonal clarity. Its ergonomic single-cutaway design ensures comfortable access to all 22 stainless steel frets, while the roasted maple neck with an asymmetric carve offers a smooth playing experience. The guitar is equipped with custom DiMarzio humbuckers, delivering a dynamic range of tones suitable for rock, blues, and beyond.",
    price: 1600,
    brandId: "2",
  },
  {
    __typename: "Model",
    id: "mm3",
    name: "Cutlass RS",
    type: "ELECTRIC",
    image: "/guitars_images/instrument-3.png",
    description:
      "Cutlass RS features a lightweight basswood body with a striking figured maple top, providing both aesthetic appeal and tonal clarity. Its ergonomic single-cutaway design ensures comfortable access to all 22 stainless steel frets, while the roasted maple neck with an asymmetric carve offers a smooth playing experience. The guitar is equipped with custom DiMarzio humbuckers, delivering a dynamic range of tones suitable for rock, blues, and beyond.",
    price: 1300,
    brandId: "3",
  },
];

export default guitarsData;
