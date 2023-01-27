
const getThumbnail = (id) => id ? `https://img.youtube.com/vi/${id}/0.jpg` : console.log("getThumbnail >> ID is not provided");

const genHref = (id) => id ? `https://youtu.be/${id}`: console.log("getThumbnail >> ID is not provided");

const addClips = () => {
    for (const key in CLIPS) {
        const thumbnail = getThumbnail(key)
        const title = CLIPS[key].title ? CLIPS[key].title : "Nema naslova"
        const url = genHref(key)
        $("#clips_wrapper").append(`
            <div class="klip">
                <div class="overlay">
                    <a target="_blank" rel="noopener noreferrer" href="${url}">
                        <i class="fa fa-play"></i>
                    </a>
                </div>

                <img style="width:100%;" src="${thumbnail}">
                <p>${title}</p>
            </div>
        `);
    }
}

addClips()