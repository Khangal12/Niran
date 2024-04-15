const makeups = [
  {
    artist: "Nomin",
    img: "https://www.gettyimages.com/detail/photo/beautiful-woman-applying-make-up-royalty-free-image/1176520415",
    type: "wedding",
    part: "eye",
  },
  {
    artist: "Khangal",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.itakeyou.co.uk%2Fidea%2F20-wedding-makeup-looks-for-brunettes-13%2F&psig=AOvVaw0mY2CrfLDviqQyfbES4nd6&ust=1713281632788000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjRlczFxIUDFQAAAAAdAAAAABAE",
    type: "wedding",
    part: "eye",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DPqnjLgjn0Tc&psig=AOvVaw21ZyF8tso21m6Pp9mLKm-J&ust=1713281667726000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMignN3FxIUDFQAAAAAdAAAAABAE",
    type: "wedding",
    part: "eye",
  },
  {
    artist: "Nomin",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdbPvZpsHFts&psig=AOvVaw2VNIN5pVb8Bf8i7Yqxfqv0&ust=1713281694021000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIivi-jFxIUDFQAAAAAdAAAAABAE",
    type: "wedding",
    part: "eye",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DPqnjLgjn0Tc&psig=AOvVaw21ZyF8tso21m6Pp9mLKm-J&ust=1713281667726000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMignN3FxIUDFQAAAAAdAAAAABAE",
    type: "wedding",
    part: "eye",
  },
  {
    artist: "Nomin",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdbPvZpsHFts&psig=AOvVaw2VNIN5pVb8Bf8i7Yqxfqv0&ust=1713281694021000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIivi-jFxIUDFQAAAAAdAAAAABAE",
    type: "wedding",
    part: "eye",
  },

  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DgIPHP0IPcrY&psig=AOvVaw2U5RlEo8AHG_8DmaUNMbPE&ust=1713281713526000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCikPPFxIUDFQAAAAAdAAAAABAE",
    type: "simple",
    part: "eye-brows",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DgIPHP0IPcrY&psig=AOvVaw2U5RlEo8AHG_8DmaUNMbPE&ust=1713281713526000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCikPPFxIUDFQAAAAAdAAAAABAE",
    type: "simple",
    part: "eye-brows",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DgIPHP0IPcrY&psig=AOvVaw2U5RlEo8AHG_8DmaUNMbPE&ust=1713281713526000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCikPPFxIUDFQAAAAAdAAAAABAE",
    type: "simple",
    part: "eye-brows",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DgIPHP0IPcrY&psig=AOvVaw2U5RlEo8AHG_8DmaUNMbPE&ust=1713281713526000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCikPPFxIUDFQAAAAAdAAAAABAE",
    type: "simple",
    part: "eye-brows",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DgIPHP0IPcrY&psig=AOvVaw2U5RlEo8AHG_8DmaUNMbPE&ust=1713281713526000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCikPPFxIUDFQAAAAAdAAAAABAE",
    type: "simple",
    part: "eye-brows",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DgIPHP0IPcrY&psig=AOvVaw2U5RlEo8AHG_8DmaUNMbPE&ust=1713281713526000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCikPPFxIUDFQAAAAAdAAAAABAE",
    type: "simple",
    part: "eye-brows",
  },

  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.temu.com%2F169-pcs-gemstone-green-diy-under-eye-shiny-eye-makeup-bright-face-sticker-jewelry-makeup-face-decoration-pearl-rhinestone-sticker-stage-makeup-glitter-g-601099526449413.html&psig=AOvVaw3iCfXkSRPdqDiSeNFUy_e2&ust=1713281737008000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOihxvzFxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "eye",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.temu.com%2F169-pcs-gemstone-green-diy-under-eye-shiny-eye-makeup-bright-face-sticker-jewelry-makeup-face-decoration-pearl-rhinestone-sticker-stage-makeup-glitter-g-601099526449413.html&psig=AOvVaw3iCfXkSRPdqDiSeNFUy_e2&ust=1713281737008000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOihxvzFxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "eye",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.temu.com%2F169-pcs-gemstone-green-diy-under-eye-shiny-eye-makeup-bright-face-sticker-jewelry-makeup-face-decoration-pearl-rhinestone-sticker-stage-makeup-glitter-g-601099526449413.html&psig=AOvVaw3iCfXkSRPdqDiSeNFUy_e2&ust=1713281737008000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOihxvzFxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "eye",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.temu.com%2F169-pcs-gemstone-green-diy-under-eye-shiny-eye-makeup-bright-face-sticker-jewelry-makeup-face-decoration-pearl-rhinestone-sticker-stage-makeup-glitter-g-601099526449413.html&psig=AOvVaw3iCfXkSRPdqDiSeNFUy_e2&ust=1713281737008000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOihxvzFxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "eye",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.temu.com%2F169-pcs-gemstone-green-diy-under-eye-shiny-eye-makeup-bright-face-sticker-jewelry-makeup-face-decoration-pearl-rhinestone-sticker-stage-makeup-glitter-g-601099526449413.html&psig=AOvVaw3iCfXkSRPdqDiSeNFUy_e2&ust=1713281737008000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOihxvzFxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "eye",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.temu.com%2F169-pcs-gemstone-green-diy-under-eye-shiny-eye-makeup-bright-face-sticker-jewelry-makeup-face-decoration-pearl-rhinestone-sticker-stage-makeup-glitter-g-601099526449413.html&psig=AOvVaw3iCfXkSRPdqDiSeNFUy_e2&ust=1713281737008000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOihxvzFxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "eye",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.temu.com%2F169-pcs-gemstone-green-diy-under-eye-shiny-eye-makeup-bright-face-sticker-jewelry-makeup-face-decoration-pearl-rhinestone-sticker-stage-makeup-glitter-g-601099526449413.html&psig=AOvVaw3iCfXkSRPdqDiSeNFUy_e2&ust=1713281737008000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOihxvzFxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "eye",
  },
  {
    artist: "Zaya",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.temu.com%2F169-pcs-gemstone-green-diy-under-eye-shiny-eye-makeup-bright-face-sticker-jewelry-makeup-face-decoration-pearl-rhinestone-sticker-stage-makeup-glitter-g-601099526449413.html&psig=AOvVaw3iCfXkSRPdqDiSeNFUy_e2&ust=1713281737008000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOihxvzFxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "eye",
  },
  {
    artist: "Nomin",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F684687949579174893%2F&psig=AOvVaw3LDoMcP9zAlF5u4Hw-tyqe&ust=1713281750508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC8_ILGxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "lip",
  },
  {
    artist: "Nomin",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F684687949579174893%2F&psig=AOvVaw3LDoMcP9zAlF5u4Hw-tyqe&ust=1713281750508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC8_ILGxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "lip",
  },
  {
    artist: "Nomin",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F684687949579174893%2F&psig=AOvVaw3LDoMcP9zAlF5u4Hw-tyqe&ust=1713281750508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC8_ILGxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "lip",
  },
  {
    artist: "Nomin",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F684687949579174893%2F&psig=AOvVaw3LDoMcP9zAlF5u4Hw-tyqe&ust=1713281750508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC8_ILGxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "lip",
  },
  {
    artist: "Nomin",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F684687949579174893%2F&psig=AOvVaw3LDoMcP9zAlF5u4Hw-tyqe&ust=1713281750508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC8_ILGxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "lip",
  },
  {
    artist: "Nomin",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F684687949579174893%2F&psig=AOvVaw3LDoMcP9zAlF5u4Hw-tyqe&ust=1713281750508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC8_ILGxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "lip",
  },
  {
    artist: "Nomin",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F684687949579174893%2F&psig=AOvVaw3LDoMcP9zAlF5u4Hw-tyqe&ust=1713281750508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC8_ILGxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "lip",
  },
  {
    artist: "Nomin",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F684687949579174893%2F&psig=AOvVaw3LDoMcP9zAlF5u4Hw-tyqe&ust=1713281750508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC8_ILGxIUDFQAAAAAdAAAAABAE",
    type: "decoration",
    part: "lip",
  },
  {
    artist: "Nomin",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ebay.ca%2Fitm%2F372538901085&psig=AOvVaw2s1BJrGoj2hitj7ALDDbsJ&ust=1713281772827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDR647GxIUDFQAAAAAdAAAAABAK",
    type: "stage",
    part: "lip",
  },
  {
    artist: "Khangal",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2Fstage-makeup-Eye%2Fs%3Fk%3Dstage%2Bmakeup%26rh%3Dn%253A11058331&psig=AOvVaw0KcNeFiCzBoGlmbRV9i89m&ust=1713281805874000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjdqp7GxIUDFQAAAAAdAAAAABAE",
    type: "stage",
    part: "eye-brows",
  },
  {
    artist: "Khangal",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fabmood.com%2Ffabulous-lip-makeup-by-veronique-tumini%2F&psig=AOvVaw11waYseIKm7k41PUrrAj5S&ust=1713281822055000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDVyaXGxIUDFQAAAAAdAAAAABAT",
    type: "wedding",
    part: "lip",
  },
  {
    artist: "Nina",
    img: "https://example.com/image13",
    type: "wedding",
    part: "eye-brows",
  },
  {
    artist: "Jack",
    img: "https://example.com/image14",
    type: "wedding",
    part: "lip",
  },
  {
    artist: "Olivia",
    img: "https://example.com/image15",
    type: "simple",
    part: "cheek",
  },
  {
    artist: "Ben",
    img: "https://example.com/image16",
    type: "simple",
    part: "lip",
  },
  {
    artist: "Lucas",
    img: "https://example.com/image17",
    type: "decoration",
    part: "eye",
  },
  {
    artist: "Ella",
    img: "https://example.com/image18",
    type: "decoration",
    part: "eye-brows",
  },
  {
    artist: "James",
    img: "https://example.com/image19",
    type: "stage",
    part: "cheek",
  },
  {
    artist: "Sophia",
    img: "https://example.com/image20",
    type: "stage",
    part: "lip",
  },
  {
    artist: "Liam",
    img: "https://example.com/image21",
    type: "casual",
    part: "eye",
  },
  {
    artist: "Charlotte",
    img: "https://example.com/image22",
    type: "casual",
    part: "eye-brows",
  },
  {
    artist: "Aiden",
    img: "https://example.com/image23",
    type: "party",
    part: "lip",
  },
  {
    artist: "Emily",
    img: "https://example.com/image24",
    type: "party",
    part: "eye",
  },
  {
    artist: "Mia",
    img: "https://example.com/image25",
    type: "glam",
    part: "eye-brows",
  },
  {
    artist: "Noah",
    img: "https://example.com/image26",
    type: "glam",
    part: "cheek",
  },
  {
    artist: "Ava",
    img: "https://example.com/image27",
    type: "wedding",
    part: "eye",
  },
  {
    artist: "William",
    img: "https://example.com/image28",
    type: "wedding",
    part: "lip",
  },
  {
    artist: "Isabella",
    img: "https://example.com/image29",
    type: "simple",
    part: "eye-brows",
  },
  {
    artist: "Ethan",
    img: "https://example.com/image30",
    type: "simple",
    part: "lip",
  },
  {
    artist: "Amelia",
    img: "https://example.com/image31",
    type: "decoration",
    part: "cheek",
  },
  {
    artist: "Mason",
    img: "https://example.com/image32",
    type: "decoration",
    part: "lip",
  },
  {
    artist: "Harper",
    img: "https://example.com/image33",
    type: "stage",
    part: "eye",
  },
  {
    artist: "Sebastian",
    img: "https://example.com/image34",
    type: "stage",
    part: "eye-brows",
  },
  {
    artist: "Evelyn",
    img: "https://example.com/image35",
    type: "casual",
    part: "cheek",
  },
  {
    artist: "Michael",
    img: "https://example.com/image36",
    type: "casual",
    part: "lip",
  },
  {
    artist: "Luna",
    img: "https://example.com/image37",
    type: "party",
    part: "eye",
  },
  {
    artist: "Alexander",
    img: "https://example.com/image38",
    type: "party",
    part: "lip",
  },
  {
    artist: "Chloe",
    img: "https://example.com/image39",
    type: "glam",
    part: "eye-brows",
  },
  {
    artist: "Daniel",
    img: "https://example.com/image40",
    type: "glam",
    part: "cheek",
  },
];
const urlParams = new URLSearchParams(document.location.search);
const typeParam = urlParams.get("type");
const partParam = urlParams.get("part");

console.log(typeParam, partParam);

let filteredMakeup;
if (typeParam && partParam) {
  filteredMakeup = makeups.filter(
    (makeup) => makeup.type === typeParam && makeup.part === partParam
  );
} else if (typeParam && !partParam) {
  filteredMakeup = makeups.filter((makeup) => makeup.type === typeParam);
} else {
  filteredMakeup = makeups;
}

const MakeupArray = filteredMakeup.map(
  (MakeUpObj) => `<article class="makeupPic item">
    <img src=${MakeUpObj.img} alt="niran" />
    <h3>Артист ${MakeUpObj.artist}</h3>
    <div class="star">
      <i class="fa fa-star checked"></i>
      <i class="fa fa-star checked"></i>
      <i class="fa fa-star checked"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
    </div>
  </article>`
);

const makeupHTML = MakeupArray.reduce((prev, current) => prev + current, "");

document.getElementById("makeup-body").innerHTML = makeupHTML;

document.getElementById("makeup-body").innerHTML = makeupHTML;
