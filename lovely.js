const rawModels = [
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