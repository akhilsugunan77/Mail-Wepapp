import Quill from "quill";

let Font = Quill.import('formats/font');
Font.whitelist = ["opensans"];
Quill.register(Font, true);

let toolbarOptions =[
    ['bold', 'italic', 'underline', 'strike'],
    [{"size":[false,"small","large","huge"]}],
    [{"font":["","opensans"]}],
    [{"align":["","center","justify","right"]}],
    ["clean"]
];

let options={
    modules:{
        toolbar:toolbarOptions,
    },
    theme:"snow",
}

new Quill("#editor",options)