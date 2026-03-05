const postForm = document.getElementById('postForm');
const postsContainer = document.getElementById('postsContainer');

postForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const content = document.getElementById('postContent').value;
    const imageFile = document.getElementById('imageUpload').files[0];

    const postCard = document.createElement('div');
    postCard.className = 'post-card';

    let imageHtml = '';
    if (imageFile) {
        const imageUrl = URL.createObjectURL(imageFile);
        imageHtml = `<img src="${imageUrl}" alt="Uploaded Image">`;
    }

    postCard.innerHTML = `
        <h4>👤 ${name}</h4>
        <p>${content}</p>
        ${imageHtml}
        <small>တင်သည့်အချိန်: ${new Date().toLocaleString()}</small>
    `;

    postsContainer.prepend(postCard);
    postForm.reset();
});

function filterCategory(cat) {
    alert(cat + " ကဏ္ဍကို ရွေးချယ်လိုက်ပါပြီ။");
}
