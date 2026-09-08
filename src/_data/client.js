module.exports = {
    name: "Red Moon Web Design",
    email: "jerry@redmoonwebdesign.com",
    phoneForTel: "9409236231",
    phoneFormatted: "(940) 923-6231",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Bowie",
        state: "TX",
        zip: "76230",
        country: "US",
        mapLink: "https://maps.app.goo.gl/2mGZYKRKFdtt3Qm38",
    },
    socials: {
        facebook: "https://www.facebook.com/profile.php?id=61575359675568",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://redmoonwebdesign.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
