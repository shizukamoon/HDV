const rawModels = [
    {
        name: "香水じゅん Jun Kasui",
		altName: "-",
        favorite: true,
		badge: "My Lovely",
		studioBadge: "Exclusive Creampie",
		photo: 
		[
            "img/japan/00/香水じゅん Jun Kasui.jpg",
            "img/japan/00/香水じゅん Jun Kasui-2.webp",
            "img/japan/00/香水じゅん Jun Kasui-3.webp",
            "img/a.webp"
        ],
        region: "Japan",
        city: "-",
        birthday: " 2001-03-30",
        height: 157,
        weight: 55,
		measurements: "82-55-85",
		cupSize: "C",
        bloodType: "-",
        studio: "S1 - Honnaka",
        debutYear: 2021,
        languages: ["Japanese"],
        tags: ["Beauty Face", "Nice Pussy", "Small Tits", "Petite", "Slim"],
        instagram: "@jun_kasui_",
        twitter: "@jun_kasui",
		bio:
		[
			"香水じゅん Jun Kasui adalah seorang aktris AV yang merupakan gadis cantik. Daya tariknya terletak pada parasnya yang manis dan polos, serta tubuh ramping dengan kulit putih mulus yang indah. Ia memiliki payudara ukuran C yang mungil dan bokong yang cantik. Kulitnya putih, mulus, dan bertekstur halus. Meski tampak polos, ia adalah gadis yang sangat nakal dan benar-benar menikmati aktivitas seksual dalam film AV-nya. Ia bahkan menunjukkan momen klimaks yang intens hingga tubuhnya bergetar hebat.",
			"Melakukan debut di industri AV pada Juli 2021 sebagai aktris eksklusif S1. Saat ini aktif sebagai aktris eksklusif Honnaka."
        ],
		buttons: [
            { text: "Javdatabase", bg: "#e94560", color: "#ffffff", link: "https://www.javdatabase.com/idols/jun-kasui/" },
            { text: "Erodougazo", bg: "#8B0000 ", color: "#ffffff", link: "https://erodougazo.com/actress/av/%E9%A6%99%E6%B0%B4%E3%81%98%E3%82%85%E3%82%93/" },
            { text: "Javrate", bg: "#FFFF00 ", color: "#ffffff", link: "https://www.javrate.com/actor/detail/1c562b18-aa89-4f44-9699-a622045a83ce.html" },
            { text: "Sumomo-ch",    bg: "#0f3460", color: "#fff",    link: "https://sumomo-ch.com/blog-entry-15432.html" }
        ], 
		dataTable: [
        {
            img: "img/japan/02/honnaka/hmn916.webp",
            link: "https://www.dmm.co.jp/mono/dvd/-/detail/=/cid=hmn916/",
            code: "HMN-916",
			date: "2026-11-24",
            deskripsi: "【完全主観】 童貞だと知った途端、 あきらかツンデレ淫語でメロついてくるマネージャーを夢の都合のイイ即ハメペット化！ 性欲解消ズボズボ中出しし放題13発 香水じゅん",
            ket: "POV , Creampie"
        },
        {
            img: "img/japan/02/honnaka/hmn898.webp",
            link: "https://www.dmm.co.jp/mono/dvd/-/detail/=/cid=hmn898/",
            code: "HMN-898",
			date: "2026-08-25",
            deskripsi: "彼女の妹に愛され過ぎてこっそり子作り10発精子搾りとられた僕 香水じゅん",
            ket: "POV , Creampie"
        }
		]
	},
    {
        name: "伊藤美桜 Mio Ito",
        favorite: true,
		badge: "My Lovely",
		photo: 
		[
            "img/japan/avstar/伊藤美桜 Mio Ito.jpg",
            "img/japan/avstar/伊藤美桜 Mio Ito.webp",
            "img/a.webp"
        ],
        region: "Japan",
        city: "-",
        birthday: "2003-11-24",
        height: 157,
        weight: 55,
        bloodType: "-",
        studio: "",
        debutYear: 2022,
        languages: ["Japanese"],
        tags: [""],
        instagram: "@",
        twitter: "@",
		bio:
		[
			"Haruna Nakano(中野はるな)",
			" 83-55-81"
        ],
		buttons: [
            { text: "Javdatabase", bg: "#e94560", color: "#ffffff", link: "https://www.javdatabase.com/idols/mio-ito/" },
            { text: "Javdatabase", bg: "#e94560", color: "#ffffff", link: "https://www.javdatabase.com/idols/haruna-nakano/" },
            { text: "n",    bg: "#0f3460", color: "#fff",    link: "" }
        ]
	}
];

function makeSlug(text) {
    return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function calcAge(birthday) {
    const b = new Date(birthday);
    const t = new Date();
    let age = t.getFullYear() - b.getFullYear();
    const m = t.getMonth() - b.getMonth();
    if (m < 0 || (m === 0 && t.getDate() < b.getDate())) age--;
    return age;
}

const modelDatabase = rawModels
    .map(m => ({
        ...m,
        slug: makeSlug(m.name),
        age: calcAge(m.birthday),
        social: { instagram: m.instagram, twitter: m.twitter }
    }))
    .sort((a, b) => new Date(b.birthday) - new Date(a.birthday));