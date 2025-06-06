// import coverImg from '../Assets/cover-pic.jpg';
// import pic1 from '../Assets/Carousal-Img/pic1.jpg';
// import pic2 from '../Assets/Carousal-Img/pic2.jpg';
// import pic3 from '../Assets/Carousal-Img/pic3.jpg';
// import pic4 from '../Assets/Carousal-Img/pic4.jpg';
// import pic5 from '../Assets/Carousal-Img/pic5.jpg';
// import pic6 from '../Assets/Carousal-Img/pic6.jpg'; 
// import menuPicture from '../Assets/Menu-pic.jpg';
// import shopPic from '../Assets/shop-pic.jpg';

function homePage() {
    //Main div for the whole homepage
    
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('outerDiv');
    const firstContainer = document.createElement('div');
    firstContainer.classList.add('first-Container');
    const secondContainer = document.createElement('div');
    secondContainer.classList.add('second-Container');
    const thirdContainer = document.createElement('div');
    thirdContainer.classList.add('third-Container');
    const fourthContainer = document.createElement('div');
    fourthContainer.classList.add('fourth-Container');
    const fifthContainer = document.createElement('div');
    fifthContainer.classList.add('fifth-Container');

    //Implementing five containers within the outerdiv

    outerDiv.appendChild(firstContainer);
    outerDiv.appendChild(secondContainer);
    outerDiv.appendChild(thirdContainer);
    outerDiv.appendChild(fourthContainer);
    outerDiv.appendChild(fifthContainer);

    document.getElementById('content').appendChild(outerDiv);

    //Div for within the div

    const firstContainerImgDiv = document.createElement('div');
    firstContainerImgDiv.classList.add('first-Container-ImgDiv');
    firstContainer.appendChild(firstContainerImgDiv);

    //Adding data into the first container

    const firstContainerImage = document.createElement('img');
    firstContainerImage.classList.add('first-Container-Image');
    firstContainerImage.setAttribute('src', '/Assets/cover-pic.jpg');
    firstContainerImgDiv.appendChild(firstContainerImage);
    
    //Adding data into the second container

    const secondContainerLettersDiv = document.createElement('div');
    secondContainerLettersDiv.classList.add('second-Container-LettersDiv');
    secondContainer.appendChild(secondContainerLettersDiv);
    const secondContainerLetters = document.createElement('h1');
    const title = document.createElement('h1');
    const subheader = document.createElement('h3');
    title.textContent = 'KOREAN BOWL & BOA';
    title.classList.add('second-div-title');
    subheader.textContent = 'We cook up bright, bold, and unique korean bowls. And we serve it all hot & fast';
    secondContainerLettersDiv.append(title);
    secondContainerLettersDiv.appendChild(subheader);

    //Creating another container within the second container for the pics carousal

    const secondContainerPicDiv = document.createElement('div');
    secondContainerPicDiv.classList.add('second-Container-PicDiv');
    secondContainer.appendChild(secondContainerPicDiv);

    //Adding 6 containers for pics carousal  -- This code could very well be done with a for loop but eh. Its fine.

    const firstPic = document.createElement('div');
    firstPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(firstPic);
    const img1 = document.createElement('img');
    img1.classList.add('carousal-Img');
    img1.setAttribute('src', '/Assets/Carousal-Img/pic1.jpg');
    firstPic.appendChild(img1);
    
    const secondPic = document.createElement('div');
    secondPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(secondPic);
    const img2 = document.createElement('img');
    img2.classList.add('carousal-Img');
    img2.setAttribute('src', '/Assets/Carousal-Img/pic2.jpg');
    secondPic.appendChild(img2);

    const thirdPic = document.createElement('div');
    thirdPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(thirdPic);
    const img3 = document.createElement('img');
    img3.classList.add('carousal-Img');
    img3.setAttribute('src', '/Assets/Carousal-Img/pic3.jpg');
    thirdPic.appendChild(img3);

    const fourthPic = document.createElement('div');
    fourthPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(fourthPic);
    const img4 = document.createElement('img');
    img4.classList.add('carousal-Img');
    img4.setAttribute('src', '/Assets/Carousal-Img/pic4.jpg');
    fourthPic.appendChild(img4);

    const fifthPic = document.createElement('div');
    fifthPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(fifthPic);
    const img5 = document.createElement('img');
    img5.classList.add('carousal-Img');
    img5.setAttribute('src', '/Assets/Carousal-Img/pic5.jpg');
    fifthPic.appendChild(img5);

    const sixthPic = document.createElement('div');
    sixthPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(sixthPic);
    const img6 = document.createElement('img');
    img6.classList.add('carousal-Img');
    img6.setAttribute('src', '/Assets/Carousal-Img/pic6.jpg');
    sixthPic.appendChild(img6);

    //Third container of homepage

    //First part of the third container

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-Container');
    thirdContainer.appendChild(menuContainer);
    const menuPic = document.createElement('img');
    menuPic.classList.add('menu-Pic');
    menuPic.setAttribute('src', '/Assets/Menu-pic.jpg');
    menuContainer.appendChild(menuPic);
    
    //Second part of the third container

    const menuPicContainer = document.createElement('div');
    menuPicContainer.classList.add('menu-Pic-Container');
    thirdContainer.appendChild(menuPicContainer);

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-Title');
    menuTitle.textContent = 'MENUS';
    menuPicContainer.appendChild(menuTitle);

    const menuText = document.createElement('h3');
    menuText.classList.add('menu-Text');
    menuText.textContent = 'Make Your Day Better with Real Food Fast!';
    menuPicContainer.appendChild(menuText);

    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-Button');
    menuButton.textContent = 'View Menu';
    menuPicContainer.appendChild(menuButton);

    //Fourth container of the homepage

    //First part of the container

    const fourthContainerText = document.createElement('div');
    fourthContainerText.classList.add('fourth-Container-Text');
    fourthContainer.appendChild(fourthContainerText);

    const fourthContainerTitle = document.createElement('h1');
    fourthContainerTitle.classList.add('fourth-Container-Title');
    fourthContainerTitle.textContent = 'SHOP';
    fourthContainerText.appendChild(fourthContainerTitle);

    const fourthContainerSubheader = document.createElement('h3');
    fourthContainerSubheader.classList.add('fourth-Container-Subheader');
    fourthContainerSubheader.textContent = 'Thank You For Spreading Disco Cheetah Love!';
    fourthContainerText.appendChild(fourthContainerSubheader);
    
    const fourthContainerButton = document.createElement('button');
    fourthContainerButton.classList.add('fourth-Container-Button');
    fourthContainerButton.textContent = 'Shop Our Items';
    fourthContainerText.appendChild(fourthContainerButton);

    //Second part of the container

    const fourthContainerPic = document.createElement('div');
    fourthContainerPic.classList.add('fourth-Container-Pic');
    fourthContainer.appendChild(fourthContainerPic);
    const fourthContainerPicImg = document.createElement('img');
    fourthContainerPicImg.classList.add('fourth-Container-Pic-Img');
    fourthContainerPicImg.setAttribute('src', '/Assets/shop-pic.jpg');
    fourthContainerPic.appendChild(fourthContainerPicImg);
}

export default homePage;