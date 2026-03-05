const homePage = document.getElementById('home-page');
const categoryPage = document.getElementById('category-page');
const categoryTitle = document.getElementById('category-title');
const postForm = document.getElementById('postForm');
const postsContainer = document.getElementById('postsContainer');

// Category တစ်ခုကို နှိပ်လိုက်လျှင် လုပ်ဆောင်မည့်အချက်
function openCategory(name, icon) {
    homePage.style.display = 'none'; // Home ကို ဖျောက်မည်
    categoryPage.style.display = 'block'; // Category Page ကို ပြမည်
    categoryTitle.innerText = icon + " " + name; // ခေါင်းစဉ်ကို ပြောင်းမည်
    
    // ထို Category နှင့်ဆိုင်သော Post များကိုသာ ပြရန် (လက်ရှိတွင် ရှင်းလင်းထားမည်)
    postsContainer.innerHTML = `<p style="text-align:center">လောလောဆယ် ${name} တွင် Post မရှိသေးပါ။</p>`;
}

// ပင်မစာမျက်နှာသို့ ပြန်သွားရန်
function showHome() {
    homePage.style.display = 'block';
    categoryPage.style.display = 'none';
}

// Post တင်သည့် အပိုင်း
postForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const content = document.getElementById('postContent').value;
    const imageFile = document.getElementById('imageUpload').files[0];

    // Post အသစ်တစ်ခု တည်ဆောက်ခြင်း
    const postCard = document.createElement('div');
    postCard.className = 'post-card';

    let imageHtml = '';
    if (imageFile) {
        const imageUrl = URL.createObjectURL(imageFile);
        imageHtml = `<img src="${imageUrl}" style="max-width:100%; border-radius:10px; margin-top:10px;">`;
    }

    postCard.innerHTML = `
        <div style="background:white; padding:15px; border-radius:10px; margin-bottom:15px; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
            <h4 style="margin:0;">👤 ${name}</h4>
            <p>${content}</p>
            ${imageHtml}
            <br><small style="color:gray;">${new Date().toLocaleString()}</small>
        </div>
    `;

    // ပထမဆုံးမှာ Post အသစ်ကို ထည့်ခြင်း
    if (postsContainer.innerHTML.includes("Post မရှိသေးပါ")) {
        postsContainer.innerHTML = "";
    }
    postsContainer.prepend(postCard);
    
    postForm.reset();
});
