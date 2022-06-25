export const convertBlocksToHtml = (blocks) => {
  var convertedHtml = "";

  blocks.forEach((block) => {
    let alignment = "";

    if (block.tunes) {
      alignment = block.tunes.alignment.alignment;
    }

    switch (block.type) {
      case "header":
        convertedHtml += `<h${block.data.level} class="text-${
          alignment || "left"
        } blog-heading">${block.data.text}</h${block.data.level}>`;
        break;

      case "embed":
        convertedHtml += `<div class="blog-embed">
        <iframe width="100%" height="380" src="${block.data.embed}" frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen title="${block.data.embed}"></iframe>
        <p class="caption">${block.data.caption}</p></div>`;
        break;

      case "paragraph":
        convertedHtml += `<p class="text-${
          alignment || "left"
        } blog-paragraph">${block.data.text}</p>`;
        break;

      case "delimiter":
        convertedHtml += `<p class="text-center blog-delimiter">***</p>`;
        break;

      case "image":
        convertedHtml += `<figure class=${
          block.data.stretched && "blog-image_stretched"
        }>
        <img class="blog-image" src="${block.data.file.url}" alt="${
          block.data.file.url
        }" />
        <p class="caption">${block.data.caption}</p>
        </figure>`;
        break;

      case "list":
        if (block.data.style === "ordered");

        convertedHtml += `${
          block.data.style === "unordered" ? "<ul>" : "<ol>"
        }`;

        block.data.items.forEach(function (li) {
          convertedHtml += `<li>${li}</li>`;
        });

        convertedHtml += `${
          block.data.style === "unordered" ? "</ul>" : "</ol>"
        }`;
        break;

      case "quote":
        convertedHtml += `<blockquote>
        <i class="fal fa-quote-left"></i>
        <span>
          ${block.data.text}
        </span>
        </blockquote>`;
        break;

      default:
        console.log("Unknown block type", block.type);
        break;
    }
  });

  return convertedHtml;
};
