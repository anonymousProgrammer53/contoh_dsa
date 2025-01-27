const getComponentCommentContainer = () => {
  return document.querySelector('.comment-container');
}

const getComponentCommentSelect = () => {
  return document.querySelector('.select-comment');
}

const createComponentComment = (parentComponent, type = 'all') => {
  getComponentCommentContainer().innerHTML = ``;

  fetch('./dataComments.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(dataComments => {
      let commentsToDisplay = [];

      if (type === 'shortest') {
        let minDataComment = dataComments[0];
        let minLength = minDataComment.comment.commentBody.commentContent.length;

        for (let i = 1; i < dataComments.length; i++) {
          const dataComment = dataComments[i];
          const commentLength = dataComment.comment.commentBody.commentContent.length;
          if (commentLength < minLength) {
            minLength = commentLength;
            minDataComment = dataComment;
          }
        }

        commentsToDisplay = [minDataComment];
      } else if (type === 'longest') {
        let maxDataComment = dataComments[0];
        let maxLength = maxDataComment.comment.commentBody.commentContent.length;

        for (let i = 1; i < dataComments.length; i++) {
          const dataComment = dataComments[i];
          const commentLength = dataComment.comment.commentBody.commentContent.length;
          if (commentLength > maxLength) {
            maxLength = commentLength;
            maxDataComment = dataComment;
          }
        }

        commentsToDisplay = [maxDataComment];
      } else {
        commentsToDisplay = dataComments;
      }

      commentsToDisplay.forEach(dataComment => {
        const divElement = document.createElement('div');
        divElement.innerHTML = `
        <div class=${Object.keys(dataComment)[0]}>
          <div class=${Object.keys(dataComment.comment)[0].replace(/([A-Z])/g, '-$1').toLowerCase()}>
            <button>
              <svg fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path fill="#707277" stroke-linecap="round" stroke-width="2" stroke="#707277"
                  d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z">
                </path>
              </svg>
            </button>
            <hr>
            <span>${dataComment.comment.commentReact.like}</span>
          </div>
          <div class=${Object.keys(dataComment.comment)[1].replace(/([A-Z])/g, '-$1').toLowerCase()}>
            <div class=${Object.keys(dataComment.comment.commentBody)[0].replace(/([A-Z])/g, '-$1').toLowerCase()}>
              <div class=${Object.keys(dataComment.comment.commentBody.user)[0].replace(/([A-Z])/g, '-$1').toLowerCase()}>
                <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linejoin="round" fill="#707277" stroke-linecap="round" stroke-width="2" stroke="#707277"
                    d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z">
                  </path>
                  <path stroke-width="2" fill="#707277" stroke="#707277"
                    d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z">
                  </path>
                </svg>
              </div>
              <div class=${Object.keys(dataComment.comment.commentBody.user)[1].replace(/([A-Z])/g, '-$1').toLowerCase()}>
                <span>${dataComment.comment.commentBody.user.userInfo.userName}</span>
                <p>${dataComment.comment.commentBody.user.userInfo.time}</p>
              </div>
            </div>
            <p class=${Object.keys(dataComment.comment.commentBody)[1].replace(/([A-Z])/g, '-$1').toLowerCase()}>${dataComment.comment.commentBody.commentContent}</p>
          </div>
        </div>`;

        parentComponent.appendChild(divElement);
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

getComponentCommentSelect().addEventListener('change', () => {
  const value = getComponentCommentSelect().value;
  if (value === 'all-comment') {
    createComponentComment(getComponentCommentContainer(), 'all');
  } else if (value === 'shortest-comment') {
    createComponentComment(getComponentCommentContainer(), 'shortest');
  } else if (value === 'longest-comment') {
    createComponentComment(getComponentCommentContainer(), 'longest');
  } else {
    createComponentComment(getComponentCommentContainer(), 'all');
  }
});

window.addEventListener('load', () => {
  createComponentComment(getComponentCommentContainer(), 'all');
});
