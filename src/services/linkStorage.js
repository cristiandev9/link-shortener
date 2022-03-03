
export async function ReturnLinks(key) {
    const links = await localStorage.getItem(key);
    let linksSaves = JSON.parse(links) || [];
    return linksSaves;
}

export async function SaveLink(key, newLink) {

    let allLinks = await ReturnLinks(key);

    const hasLink = allLinks.some(link => link.id === newLink.id);

    if (hasLink) {
        alert('Esse link já existe na sua lista!');
        return;
    }

    allLinks.push(newLink);
    await localStorage.setItem(key, JSON.stringify(allLinks));
}