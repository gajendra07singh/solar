/**
 * SEO & Metadata Manager for Shri Solar
 * Is file mein aap naye keywords aur description asani se add kar sakte hain.
 */

const seoConfig = {
    title: "Shri Solar – India's Leading Home Rooftop Solar Company | Since 2005",
    description: "Bharat ki trusted home rooftop solar company. Get 0 EMI plans, storm-proof structures (170kmph), and PM Surya Ghar Yojna subsidy support. Save up to 90% on electricity bills.",
    keywords: [
        "Shri Solar", "Home Rooftop Solar India", "Best Solar Panel for Home",
        "Solar System Price with Subsidy", "PM Surya Ghar Muft Bijli Yojna",
        "0 EMI Solar Loan", "Solar Energy Company Noida", "Rooftop Solar Installation",
        "SolarSquare Alternative India", "Shri Badrinath Alternative Energy Limited",
        "Solar Subsidy UP", "Noida Solar Panels", "Solar Panel Dealers Greater Noida"
    ],
    ogImage: "https://shrisolar.com/assets/img/logo/logo.png",
    url: "https://shrisolar.com/"
};

function injectSEO() {
    // 1. Update Title
    document.title = seoConfig.title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = seoConfig.description;

    // 3. Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = "keywords";
        document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = seoConfig.keywords.join(", ");

    // 4. Update Open Graph (Social Media) Tags
    const ogTags = {
        "og:title": seoConfig.title,
        "og:description": seoConfig.description,
        "og:image": seoConfig.ogImage,
        "og:url": seoConfig.url,
        "twitter:title": seoConfig.title,
        "twitter:description": seoConfig.description
    };

    for (let property in ogTags) {
        let tag = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            if (property.startsWith('og:')) tag.setAttribute('property', property);
            else tag.name = property;
            document.head.appendChild(tag);
        }
        tag.content = ogTags[property];
    }

    console.log("SEO Metadata Injected Successfully.");
}

// Initialize SEO
injectSEO();
