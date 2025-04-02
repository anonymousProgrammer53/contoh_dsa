const componentPostCard = () => {
    return document.getElementById('post-card');
}

const componentPostCardPost = (parentComponent, { username, profile_picture, text, date, comment, pin, share }) => {
    const div = document.createElement('div');
    div.classList.add('post-card__post');
    div.innerHTML = `
    <div class="post-card__header">
        <div alt="Profile" class="post-card__profile-pic">
            <img src="${profile_picture}">
        </div>
        <span class="post-card__username">${username}</span>
    </div>
    <div class="post-card__body">
        <p class="post-card__text">${text}</p>
        <span class="post-card__date">${date}</span>
        <div class="post-card__footer">
            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g stroke-linejoin="round" stroke-linecap="round"
                        id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                        <path stroke-linejoin="round" stroke-linecap="round"
                        stroke-width="1.5"
                        d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z">
                        </path></g>
                    </svg>${comment}
                </div>
                <div>
                    <svg fill="#000000" xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg" version="1.1"
                        viewBox="-2.5 0 32 32">
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g stroke-linejoin="round" stroke-linecap="round"
                        id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                        <g id="icomoon-ignore"> </g>
                        <path fill="#000000"
                        d="M0 10.284l0.505 0.36c0.089 0.064 0.92 0.621 2.604 0.621 0.27 0 0.55-0.015 0.836-0.044 3.752 4.346 6.411 7.472 7.060 8.299-1.227 2.735-1.42 5.808-0.537 8.686l0.256 0.834 7.63-7.631 8.309 8.309 0.742-0.742-8.309-8.309 7.631-7.631-0.834-0.255c-2.829-0.868-5.986-0.672-8.686 0.537-0.825-0.648-3.942-3.3-8.28-7.044 0.11-0.669 0.23-2.183-0.575-3.441l-0.352-0.549-8.001 8.001zM1.729 10.039l6.032-6.033c0.385 1.122 0.090 2.319 0.086 2.334l-0.080 0.314 0.245 0.214c7.409 6.398 8.631 7.39 8.992 7.546l-0.002 0.006 0.195 0.058 0.185-0.087c2.257-1.079 4.903-1.378 7.343-0.836l-13.482 13.481c-0.55-2.47-0.262-5.045 0.837-7.342l0.104-0.218-0.098-0.221-0.031 0.013c-0.322-0.632-1.831-2.38-7.498-8.944l-0.185-0.215-0.282 0.038c-0.338 0.045-0.668 0.069-0.981 0.069-0.595 0-1.053-0.083-1.38-0.176z">
                        </path></g>
                    </svg>${pin}
                </div>
                <div>
                    <svg viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                        stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                        <path opacity="0.1"
                        d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z"
                        fill="#323232"></path>
                        <path opacity="0.1"
                        d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
                        fill="#323232"></path>
                        <path opacity="0.1"
                        d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z"
                        fill="#323232"></path>
                        <path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z"
                        stroke-width="2"></path>
                        <path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
                        stroke-width="2"></path>
                        <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z"
                        stroke-width="2"></path>
                        <path d="M8.7207 10.6397L15.0001 7.5" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M8.70605 13.353L15 16.5" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"></path></g>
                    </svg>${share}
                </div>
            </div>
        </div>
    </div>`;
    parentComponent.appendChild(div);
    return div;
}

const componentCommentCardContainer = () => {
    return document.getElementById('comment-card_container');
}

const componentCommentCardComment = (parentComponent, { username, date, text, like }) => {
    const div = document.createElement('div');
    div.classList.add('comment-card_comments');
    div.innerHTML = `
    <div class="comment-react">
        <button>
            <svg fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path fill="#707277" stroke-linecap="round" stroke-width="2" stroke="#707277" d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"></path>
            </svg>
        </button><hr>
        <span>${like}</span>
    </div>
    <div class="comment-container">
        <div class="user">
            <div class="user-pic">
                <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linejoin="round" fill="#707277" stroke-linecap="round" stroke-width="2" stroke="#707277" d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"></path>
                    <path stroke-width="2" fill="#707277" stroke="#707277" d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"></path>
                </svg>
            </div>
            <div class="user-info">
                <span>${username}</span>
                <p>${date}</p>
            </div>
        </div>
        <p class="comment-content">${text}</p>
    </div>`
    parentComponent.appendChild(div);
    return div;
}

const targetElement = (target) => {
    target.parentElement.parentElement.querySelectorAll('a').forEach((a) => {
        a.classList.remove('active');
        a.removeAttribute('aria-current');
    });
    target.classList.add('active');
    target.setAttribute('aria-current', 'page');
}

const fetchData = (data, prosesType, callback, property = null) => {
    fetch(data)
        .then(response => {
            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }
            return response.json();
        })
        .then(data => {
            if (prosesType === 'displayAll') {
                Object.values(data).forEach(item => {
                    callback(item);
                });
            } else if (prosesType === 'shortest') {
                if (Object.values(data).length === 0) {
                    console.log('Data kosong');
                } else {
                    let minVal = Object.values(data)[0];
                    for (let i of Object.values(data)) {
                        if (i.text && i.text.length < minVal.text.length) {
                            minVal = i;
                        }
                    }
                    callback(minVal);
                }
            } else if (prosesType === 'longest') {
                if (Object.values(data).length === 0) {
                    console.log('Data kosong');
                } else {
                    let minVal = Object.values(data)[0];
                    for (let i of Object.values(data)) {
                        if (i.text && i.text.length > minVal.text.length) {
                            minVal = i;
                        }
                    }
                    callback(minVal);
                }
            } else if (prosesType === 'latest' || prosesType === 'first') {
                const convertToSeconds = (dateString) => {
                    const timeUnits = {
                        "detik": 1,
                        "menit": 60,
                        "jam": 3600,
                        "hari": 86400
                    };

                    const match = dateString.match(/(\d+)\s+(detik|menit|jam|hari)/);
                    if (match) {
                        let value = parseInt(match[1]);
                        let unit = match[2];

                        return value * timeUnits[unit];
                    }
                    return null;
                };

                if (Object.values(data).length === 0) {
                    console.log('Data kosong');
                } else {
                    let minVal = Object.values(data)[0];
                    for (let i of Object.values(data)) {
                        let postTime = convertToSeconds(i.date);
                        if (postTime !== null) {
                            if ((prosesType === 'latest' && postTime < convertToSeconds(minVal.date)) ||
                                (prosesType === 'first' && postTime > convertToSeconds(minVal.date))) {
                                minVal = i;
                            }
                        }
                    }
                    callback(minVal);
                }
            } else if (['least', 'most'].includes(prosesType) && property) {
                if (Object.values(data).length === 0) {
                    console.log('Data kosong');
                } else {
                    let minVal = Object.values(data)[0];
                    for (let i of Object.values(data)) {
                        if (typeof i[property] === "number") {
                            if ((prosesType === 'least' && i[property] < minVal[property]) ||
                                (prosesType === 'most' && i[property] > minVal[property])) {
                                minVal = i;
                            }
                        }
                    }
                    callback(minVal);
                }
            }
        })
        .catch(error => console.error('Error:', error));
};

document.addEventListener("DOMContentLoaded", () => {
    fetchData('./dataPost.json', 'displayAll', (item) => {
        componentPostCardPost(componentPostCard(), {
            username: item.username,
            profile_picture: item.profile_picture,
            text: item.text,
            date: item.date,
            comment: item.comment,
            pin: item.pin,
            share: item.share
        });
    });
    fetchData('./dataComment.json', 'displayAll', (item) => {
        componentCommentCardComment(componentCommentCardContainer(), {
            username: item.username,
            date: item.date,
            text: item.text,
            like: item.like
        });
    });
});

document.querySelectorAll('section')[0].querySelector('ul').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Semua Postingan') {
        targetElement(e.target);
        componentPostCard().innerHTML = '';
        fetchData('./dataPost.json', 'displayAll', (item) => {
            componentPostCardPost(componentPostCard(), {
                username: item.username,
                profile_picture: item.profile_picture,
                text: item.text,
                date: item.date,
                comment: item.comment,
                pin: item.pin,
                share: item.share
            });
        });
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Postingan Terpendek') {
        targetElement(e.target);
        componentPostCard().innerHTML = '';
        fetchData('./dataPost.json', 'shortest', (item) => {
            componentPostCardPost(componentPostCard(), {
                username: item.username,
                profile_picture: item.profile_picture,
                text: item.text,
                date: item.date,
                comment: item.comment,
                pin: item.pin,
                share: item.share
            });
        });
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Postingan Terpanjang') {
        targetElement(e.target);
        componentPostCard().innerHTML = '';
        fetchData('./dataPost.json', 'longest', (item) => {
            componentPostCardPost(componentPostCard(), {
                username: item.username,
                profile_picture: item.profile_picture,
                text: item.text,
                date: item.date,
                comment: item.comment,
                pin: item.pin,
                share: item.share
            });
        });
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Postingan Terbaru') {
        targetElement(e.target);
        componentPostCard().innerHTML = '';
        fetchData('./dataPost.json', 'latest', (item) => {
            componentPostCardPost(componentPostCard(), {
                username: item.username,
                profile_picture: item.profile_picture,
                text: item.text,
                date: item.date,
                comment: item.comment,
                pin: item.pin,
                share: item.share
            });
        });
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Postingan Pertama') {
        targetElement(e.target);
        componentPostCard().innerHTML = '';
        fetchData('./dataPost.json', 'first', (item) => {
            componentPostCardPost(componentPostCard(), {
                username: item.username,
                profile_picture: item.profile_picture,
                text: item.text,
                date: item.date,
                comment: item.comment,
                pin: item.pin,
                share: item.share
            });
        });
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Komentar Tersedikit') {
        targetElement(e.target);
        componentPostCard().innerHTML = '';
        fetchData('./dataPost.json', 'least', (item) => {
            componentPostCardPost(componentPostCard(), {
                username: item.username,
                profile_picture: item.profile_picture,
                text: item.text,
                date: item.date,
                comment: item.comment,
                pin: item.pin,
                share: item.share
            });
        }, 'comment');
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Komentar Terbanyak') {
        targetElement(e.target);
        componentPostCard().innerHTML = '';
        fetchData('./dataPost.json', 'most', (item) => {
            componentPostCardPost(componentPostCard(), {
                username: item.username,
                profile_picture: item.profile_picture,
                text: item.text,
                date: item.date,
                comment: item.comment,
                pin: item.pin,
                share: item.share
            });
        }, 'comment');
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Pin Tersedikit') {
        targetElement(e.target);
        componentPostCard().innerHTML = '';
        fetchData('./dataPost.json', 'least', (item) => {
            componentPostCardPost(componentPostCard(), {
                username: item.username,
                profile_picture: item.profile_picture,
                text: item.text,
                date: item.date,
                comment: item.comment,
                pin: item.pin,
                share: item.share
            });
        }, 'pin');
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Pin Terbanyak') {
        targetElement(e.target);
        componentPostCard().innerHTML = '';
        fetchData('./dataPost.json', 'most', (item) => {
            componentPostCardPost(componentPostCard(), {
                username: item.username,
                profile_picture: item.profile_picture,
                text: item.text,
                date: item.date,
                comment: item.comment,
                pin: item.pin,
                share: item.share
            });
        }, 'pin');
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Share Tersedikit') {
        targetElement(e.target);
        componentPostCard().innerHTML = '';
        fetchData('./dataPost.json', 'least', (item) => {
            componentPostCardPost(componentPostCard(), {
                username: item.username,
                profile_picture: item.profile_picture,
                text: item.text,
                date: item.date,
                comment: item.comment,
                pin: item.pin,
                share: item.share
            });
        }, 'share');
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Share Terbanyak') {
        targetElement(e.target);
        componentPostCard().innerHTML = '';
        fetchData('./dataPost.json', 'most', (item) => {
            componentPostCardPost(componentPostCard(), {
                username: item.username,
                profile_picture: item.profile_picture,
                text: item.text,
                date: item.date,
                comment: item.comment,
                pin: item.pin,
                share: item.share
            });
        }, 'share');
    }
});

document.querySelectorAll('section')[1].querySelector('ul').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Semua Komentar') {
        targetElement(e.target);
        componentCommentCardContainer().innerHTML = ``;
        fetchData('./dataComment.json', 'displayAll', (item) => {
            componentCommentCardComment(componentCommentCardContainer(), {
                username: item.username,
                date: item.date,
                text: item.text,
                like: item.like
            });
        });
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Komentar Terpendek') {
        targetElement(e.target);
        componentCommentCardContainer().innerHTML = ``;
        fetchData('./dataComment.json', 'shortest', (item) => {
            componentCommentCardComment(componentCommentCardContainer(), {
                username: item.username,
                date: item.date,
                text: item.text,
                like: item.like
            });
        });
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Komentar Terpanjang') {
        targetElement(e.target);
        componentCommentCardContainer().innerHTML = ``;
        fetchData('./dataComment.json', 'longest', (item) => {
            componentCommentCardComment(componentCommentCardContainer(), {
                username: item.username,
                date: item.date,
                text: item.text,
                like: item.like
            });
        });
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Komentar Terbaru') {
        targetElement(e.target);
        componentCommentCardContainer().innerHTML = ``;
        fetchData('./dataComment.json', 'latest', (item) => {
            componentCommentCardComment(componentCommentCardContainer(), {
                username: item.username,
                date: item.date,
                text: item.text,
                like: item.like
            });
        });
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Komentar Pertama') {
        targetElement(e.target);
        componentCommentCardContainer().innerHTML = ``;
        fetchData('./dataComment.json', 'first', (item) => {
            componentCommentCardComment(componentCommentCardContainer(), {
                username: item.username,
                date: item.date,
                text: item.text,
                like: item.like
            });
        });
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Like Tersedikit') {
        targetElement(e.target);
        componentCommentCardContainer().innerHTML = ``;
        fetchData('./dataComment.json', 'least', (item) => {
            componentCommentCardComment(componentCommentCardContainer(), {
                username: item.username,
                date: item.date,
                text: item.text,
                like: item.like
            });
        }, 'like');
    } else if (e.target.tagName === 'A' && e.target.textContent.trim() === 'Like Terbanyak') {
        targetElement(e.target);
        componentCommentCardContainer().innerHTML = ``;
        fetchData('./dataComment.json', 'most', (item) => {
            componentCommentCardComment(componentCommentCardContainer(), {
                username: item.username,
                date: item.date,
                text: item.text,
                like: item.like
            });
        }, 'like');
    }
});
