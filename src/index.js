const flexContainer = document.getElementsByClassName("flex-container")[0];
//all the images
const dogImages = document.querySelectorAll("img");

const resetButton = document.querySelector("#id");

//select elements on the flex container
const flexContainerStyleSelect = document.querySelectorAll(
  "section#flex-container-styles > select"
);
//select elements on the flex item
const flexItemStyleSelect = document.querySelectorAll(
  "section#flex-items-styles "
);

//change properties of the Flex Container everytime there is new option is selected
flexContainerStyleSelect.forEach((selectElement) =>
  selectElement.addEventListener("change", changeFlexContainerStyle)
);

//fire the event if the target of the click event is an image
flexContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") addOClassToSelectedImg(e);
});

/*for each of the select elements for the flex-item properties, 
add the selected property to the selected image */
flexItemStyleSelect.forEach((select) =>
  select.addEventListener("change", (e) => {
    //get image that is selected by its classname
    const selectedImage = document.getElementsByClassName("opacity")[0];

    //set the flex rule of the selected image
    selectedImage.style[e.target.id] = e.target.value;
  })
);

// resetButton.addEventListener("click", resetAllValues);

function addOClassToSelectedImg(e) {
  //retrieve the image we have clicked on
  const currentlySelectedImage = [...dogImages].find(
    (image) => image.alt === e.target.alt
  );

  //remove the class "opacity" from siblings when we click on a different image
  [...currentlySelectedImage.parentElement.children].forEach((sibling) =>
    sibling.classList.remove("opacity")
  );
  currentlySelectedImage.classList.add("opacity");
}

/*change the property on the flex container which is equal to the name attribute of the select element
chane this property to the value of the option element selected*/
function changeFlexContainerStyle(e) {
  document.querySelector(".flex-container").style[e.target.name] =
    e.target.value;
}
