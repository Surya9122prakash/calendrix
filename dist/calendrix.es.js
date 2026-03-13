(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wider:.05em;--leading-relaxed:1.625;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing) * 0)}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.-top-\\[5px\\]{top:-5px}.top-0{top:calc(var(--spacing) * 0)}.top-1{top:calc(var(--spacing) * 1)}.top-1\\/2{top:50%}.top-\\[2px\\]{top:2px}.right-0{right:calc(var(--spacing) * 0)}.right-1{right:calc(var(--spacing) * 1)}.right-2{right:calc(var(--spacing) * 2)}.right-3{right:calc(var(--spacing) * 3)}.right-\\[2px\\]{right:2px}.bottom-0{bottom:calc(var(--spacing) * 0)}.-left-1{left:calc(var(--spacing) * -1)}.left-0{left:calc(var(--spacing) * 0)}.left-1{left:calc(var(--spacing) * 1)}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}.z-\\[60\\]{z-index:60}.z-\\[70\\]{z-index:70}.m-4{margin:calc(var(--spacing) * 4)}.m-5{margin:calc(var(--spacing) * 5)}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.ml-2{margin-left:calc(var(--spacing) * 2)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.grid{display:grid}.table{display:table}.h-2{height:calc(var(--spacing) * 2)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-10{height:calc(var(--spacing) * 10)}.h-12{height:calc(var(--spacing) * 12)}.h-24{height:calc(var(--spacing) * 24)}.h-full{height:100%}.h-screen{height:100vh}.max-h-48{max-height:calc(var(--spacing) * 48)}.max-h-60{max-height:calc(var(--spacing) * 60)}.max-h-\\[90vh\\]{max-height:90vh}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-\\[80px\\]{min-height:80px}.min-h-\\[120px\\]{min-height:120px}.min-h-\\[200px\\]{min-height:200px}.min-h-full{min-height:100%}.w-2{width:calc(var(--spacing) * 2)}.w-4{width:calc(var(--spacing) * 4)}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-24{width:calc(var(--spacing) * 24)}.w-64{width:calc(var(--spacing) * 64)}.w-96{width:calc(var(--spacing) * 96)}.w-\\[450px\\]{width:450px}.w-full{width:100%}.min-w-0{min-width:calc(var(--spacing) * 0)}.min-w-\\[700px\\]{min-width:700px}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.-translate-y-1{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-ns-resize{cursor:ns-resize}.cursor-pointer{cursor:pointer}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-1{gap:calc(var(--spacing) * 1)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-\\[4px\\]{border-radius:4px}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t-2{border-top-style:var(--tw-border-style);border-top-width:2px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-dotted{--tw-border-style:dotted;border-style:dotted}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.bg-black{background-color:var(--color-black)}.bg-black\\/60{background-color:#0009}@supports (color:color-mix(in lab,red,red)){.bg-black\\/60{background-color:color-mix(in oklab,var(--color-black) 60%,transparent)}}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-50\\/50{background-color:#f9fafb80}@supports (color:color-mix(in lab,red,red)){.bg-gray-50\\/50{background-color:color-mix(in oklab,var(--color-gray-50) 50%,transparent)}}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-900\\/60{background-color:#10182899}@supports (color:color-mix(in lab,red,red)){.bg-gray-900\\/60{background-color:color-mix(in oklab,var(--color-gray-900) 60%,transparent)}}.bg-red-50{background-color:var(--color-red-50)}.bg-red-500{background-color:var(--color-red-500)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.p-1{padding:calc(var(--spacing) * 1)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.px-8{padding-inline:calc(var(--spacing) * 8)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-6{padding-block:calc(var(--spacing) * 6)}.pr-1{padding-right:calc(var(--spacing) * 1)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-10{padding-right:calc(var(--spacing) * 10)}.pb-8{padding-bottom:calc(var(--spacing) * 8)}.text-center{text-align:center}.text-right{text-align:right}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.whitespace-pre-line{white-space:pre-line}.text-blue-600{color:var(--color-blue-600)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.accent-blue-600{accent-color:var(--color-blue-600)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.opacity-80{opacity:.8}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[1px_0_5px_rgba\\(0\\,0\\,0\\,0\\.02\\)\\]{--tw-shadow:1px 0 5px var(--tw-shadow-color,#00000005);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.outline-none{--tw-outline-style:none;outline-style:none}.last\\:mb-0:last-child{margin-bottom:calc(var(--spacing) * 0)}.last\\:border-0:last-child{border-style:var(--tw-border-style);border-width:0}@media(hover:hover){.hover\\:z-20:hover{z-index:20}.hover\\:scale-\\[1\\.01\\]:hover{scale:1.01}.hover\\:scale-\\[1\\.02\\]:hover{scale:1.02}.hover\\:bg-blue-50:hover{background-color:var(--color-blue-50)}.hover\\:bg-blue-100:hover{background-color:var(--color-blue-100)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-red-50:hover{background-color:var(--color-red-50)}.hover\\:bg-red-600:hover{background-color:var(--color-red-600)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:text-red-700:hover{color:var(--color-red-700)}.hover\\:opacity-70:hover{opacity:.7}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}@media(min-width:48rem){.md\\:w-80{width:calc(var(--spacing) * 80)}.md\\:flex-row{flex-direction:row}}}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes scaleIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.animate-fadeIn{animation:.3s forwards fadeIn}.animate-scaleIn{animation:.3s forwards scaleIn}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}')),document.head.appendChild(t)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { jsxs as a, jsx as e, Fragment as se } from "react/jsx-runtime";
import { useState as R, useMemo as b, useRef as Fe, useEffect as Le, useLayoutEffect as lr } from "react";
import u from "moment-timezone";
const U = 64, $e = (r, c) => u.utc(r).tz(c), fr = ["HH:mm", "hh:mm A", "h:mm a", "H:mm", "h:mmA", "h:mma", "hh:mm a", "HH:mm:ss"], ar = (r) => u(r, fr, !0), We = (r) => {
  const c = ar(r);
  return c.isValid() ? c.hours() * 60 + c.minutes() : 0;
}, sr = (r) => {
  if (r?.length) {
    const c = r[0].start, l = r[r.length - 1].end;
    return {
      startMinutes: We(c),
      endMinutes: We(l)
    };
  }
  return {
    startMinutes: 0,
    endMinutes: 1440
  };
}, cr = (r, c) => {
  const l = [], t = r.clone().startOf("day");
  for (let n = 0; n < 1440; n += c)
    l.push(t.clone().add(n, "minutes"));
  return l;
}, er = (r, c, l, t, n) => {
  const w = r.format("HH:mm"), f = (m) => m.some((h) => {
    const x = ar(h);
    return x.isValid() && x.format("HH:mm") === w;
  });
  if (c?.length)
    return f(c);
  if (l?.length && f(l))
    return !1;
  const d = (m, h = !1) => {
    if (!m?.length) return !!h;
    const x = r.hours() * 60 + r.minutes(), A = m.some((D) => {
      const v = We(D.start), ee = We(D.end);
      return x >= v && x < ee;
    });
    return h ? !A : A;
  };
  return t?.length ? d(t) : n?.length ? d(n, !0) : !0;
}, rr = (r, c, l) => {
  const t = [];
  return r.forEach((n) => {
    const w = $e(n.start, l), f = $e(n.end, l);
    if (n.allDay) {
      w.isSame(c, "day") && t.push({ ...n, start: w, end: f, allDay: !0 });
      return;
    }
    let d = w.clone().startOf("day");
    for (; d.isBefore(f); ) {
      const m = d.clone(), h = d.clone().endOf("day"), x = u.max(w, m), A = u.min(f, h);
      x.isSame(c, "day") && t.push({
        ...n,
        start: x,
        end: A
      }), d.add(1, "day");
    }
  }), t;
}, dr = (r, c, l) => {
  const t = [...r].sort(
    (f, d) => f.start.valueOf() - d.start.valueOf()
  ), n = [];
  t.forEach((f) => {
    let d = !1;
    for (const m of n) {
      const h = m[m.length - 1];
      if (f.start.isSameOrAfter(h.end)) {
        m.push(f), d = !0;
        break;
      }
    }
    d || n.push([f]);
  });
  const w = n.length;
  return t.map((f) => {
    let d = 0;
    n.forEach((D, v) => {
      D.includes(f) && (d = v);
    });
    const m = f.start, h = f.end, x = m.diff(c.clone().startOf("day"), "minutes") / l * U, A = h.diff(m, "minutes") / l * U;
    return {
      ...f,
      columnIndex: d,
      columnCount: w,
      top: x,
      height: A
    };
  });
}, vr = (r, c) => {
  if (console.log("[detectConflicts] Checking events count:", r.length, "Timezone:", c), console.log("[detectConflicts] Events data:", r.map((n) => ({ id: n.id, title: n.title, start: n.start, end: n.end }))), r.length < 2) return [];
  const l = [], t = r.map((n) => ({
    ...n,
    _mStart: u.tz(n.start, c),
    _mEnd: u.tz(n.end, c)
  })).filter((n) => n._mStart.isValid() && n._mEnd.isValid());
  t.sort((n, w) => n._mStart.diff(w._mStart));
  for (let n = 0; n < t.length; n++)
    for (let w = n + 1; w < t.length; w++) {
      const f = t[n], d = t[w];
      if (f._mStart.isBefore(d._mEnd) && f._mEnd.isAfter(d._mStart)) {
        const m = u.max(f._mStart, d._mStart), h = u.min(f._mEnd, d._mEnd);
        l.push({
          eventId: f.id,
          withId: d.id,
          eventTitle: f.title,
          withTitle: d.title,
          overlapStart: m.toISOString(),
          overlapEnd: h.toISOString()
        }), l.push({
          eventId: d.id,
          withId: f.id,
          eventTitle: d.title,
          withTitle: f.title,
          overlapStart: m.toISOString(),
          overlapEnd: h.toISOString()
        });
      }
    }
  return console.log("[detectConflicts] Conflicts found:", l.length), l;
};
class tr {
  plugins = [];
  context;
  constructor(c = [], l) {
    this.plugins = c, this.context = l;
  }
  setContext(c) {
    this.context = c;
  }
  init() {
    this.plugins.forEach((c) => {
      c.init && c.init(this.context);
    });
  }
  triggerBeforeRender() {
    this.plugins.forEach((c) => {
      c.hooks?.beforeRender && c.hooks.beforeRender(this.context);
    });
  }
  triggerOnEventRender(c, l) {
    this.plugins.forEach((t) => {
      t.hooks?.onEventRender && t.hooks.onEventRender(c, l);
    });
  }
  triggerOnEventClick(c) {
    this.plugins.forEach((l) => {
      l.hooks?.onEventClick && l.hooks.onEventClick(c);
    });
  }
  triggerAfterRender() {
    this.plugins.forEach((c) => {
      c.hooks?.afterRender && c.hooks.afterRender(this.context);
    });
  }
  triggerOnEventChange(c) {
    this.plugins.forEach((l) => {
      l.hooks?.onEventChange && l.hooks.onEventChange(c);
    });
  }
  triggerValidateSave(c) {
    const l = [];
    return this.plugins.forEach((t) => {
      if (t.hooks?.validateSave) {
        const n = t.hooks.validateSave(c, this.context);
        n && l.push(n);
      }
    }), l;
  }
}
const mr = ({ onChange: r, timeFormat: c, slotInterval: l, timezone: t, enabledTimeSlots: n, disabledTimeSlots: w, enabledTimeInterval: f, disableTimeInterval: d, checkIsSlotEnabled: m }) => {
  const h = b(() => {
    const x = [], A = u.tz(t).startOf("day");
    for (let D = 0; D < 1440; D += l)
      x.push(A.clone().add(D, "minutes"));
    return x;
  }, [l, t]);
  return /* @__PURE__ */ e("div", { className: "absolute z-[70] bg-white border rounded shadow-xl mt-1 max-h-48 overflow-y-auto w-full no-scrollbar", children: h.map((x, A) => {
    const D = m(x, n, w, f, d);
    return /* @__PURE__ */ e(
      "div",
      {
        onClick: () => {
          D && r(x.format(c));
        },
        className: `px-3 py-2 text-sm border-b last:border-0 ${D ? "hover:bg-blue-50 cursor-pointer text-gray-800" : "bg-gray-50 text-gray-300 cursor-not-allowed"}`,
        children: x.format(c)
      },
      A
    );
  }) });
}, hr = ({ value: r, onChange: c, dateFormat: l, timezone: t }) => {
  const [n, w] = R(() => u.tz(r, l, t).isValid() ? u.tz(r, l, t) : u.tz(t)), f = b(() => {
    const d = n.clone().startOf("month").startOf("week"), m = n.clone().endOf("month").endOf("week"), h = [];
    let x = d.clone();
    for (; x.isBefore(m); )
      h.push(x.clone()), x.add(1, "day");
    return h;
  }, [n]);
  return /* @__PURE__ */ a("div", { className: "absolute z-[70] bg-white border rounded shadow-xl mt-1 p-3 w-64 animate-fadeIn", children: [
    /* @__PURE__ */ a("div", { className: "flex justify-between items-center mb-2", children: [
      /* @__PURE__ */ e("button", { onClick: () => w(n.clone().subtract(1, "month")), className: "p-1 hover:bg-gray-100 rounded", children: "←" }),
      /* @__PURE__ */ e("span", { className: "font-semibold", children: n.format("MMMM YYYY") }),
      /* @__PURE__ */ e("button", { onClick: () => w(n.clone().add(1, "month")), className: "p-1 hover:bg-gray-100 rounded", children: "→" })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-1 text-center text-xs mb-1 font-bold text-gray-500", children: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => /* @__PURE__ */ e("div", { children: d }, d)) }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-1", children: f.map((d, m) => /* @__PURE__ */ e(
      "div",
      {
        onClick: () => c(d.format(l)),
        className: `p-1.5 text-xs rounded cursor-pointer transition-colors ${d.isSame(n, "month") ? "hover:bg-blue-100" : "text-gray-300"} ${r === d.format(l) ? "bg-blue-600 text-white" : ""}`,
        children: d.date()
      },
      m
    )) })
  ] });
}, or = ({
  isOpen: r,
  onClose: c,
  editingEvent: l,
  formData: t,
  setFormData: n,
  formFields: w,
  timezone: f,
  dateFormat: d = "YYYY-MM-DD",
  timeFormat: m = "HH:mm",
  onAddEvent: h,
  onEditEvent: x,
  onDeleteEvent: A,
  pluginManager: D,
  conflictTemplate: v,
  slotInterval: ee = 30,
  enabledTimeSlots: ue,
  disabledTimeSlots: ce,
  enabledTimeInterval: ne,
  disableTimeInterval: Z
}) => {
  const [le, I] = R([]), [$, q] = R(null);
  return r ? /* @__PURE__ */ a("div", { className: "fixed inset-0 bg-gray-900/60 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn", children: [
    /* @__PURE__ */ a("div", { className: "bg-white rounded-2xl p-8 w-[450px] shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto transform animate-scaleIn", children: [
      /* @__PURE__ */ a("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-gray-800", children: l ? "Edit Event" : "Create Event" }),
        /* @__PURE__ */ e("button", { onClick: c, className: "text-gray-400 hover:text-gray-600 transition-colors", children: /* @__PURE__ */ e("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) }) })
      ] }),
      w?.map((o) => /* @__PURE__ */ a("div", { className: "mb-4", children: [
        /* @__PURE__ */ e("label", { className: "block text-sm mb-1", children: o.label }),
        (() => {
          switch (o.type) {
            case "textarea":
              return /* @__PURE__ */ e("textarea", { required: o.required, value: t[o.name] || "", onChange: (i) => n({ ...t, [o.name]: i.target.value }), className: "w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-700 bg-gray-50/50", rows: 3 });
            case "dropdown":
            case "singleSelect":
              return /* @__PURE__ */ a("select", { required: o.required, value: t[o.name] || "", onChange: (i) => n({ ...t, [o.name]: i.target.value }), className: "w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-700 bg-gray-50/50", children: [
                /* @__PURE__ */ e("option", { value: "", children: "Select..." }),
                o.options?.map((i) => /* @__PURE__ */ e("option", { value: i.value, children: i.label }, i.value))
              ] });
            case "multiselect":
              return /* @__PURE__ */ e("select", { multiple: !0, required: o.required, value: t[o.name] || [], onChange: (i) => {
                const N = Array.from(i.target.selectedOptions, (P) => P.value);
                n({ ...t, [o.name]: N });
              }, className: "w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-700 bg-gray-50/50 h-24", children: o.options?.map((i) => /* @__PURE__ */ e("option", { value: i.value, children: i.label }, i.value)) });
            case "radio":
              return /* @__PURE__ */ e("div", { className: "flex gap-4 mt-1", children: o.options?.map((i) => /* @__PURE__ */ a("label", { className: "flex items-center gap-2 cursor-pointer text-gray-700", children: [
                /* @__PURE__ */ e("input", { type: "radio", name: o.name, value: i.value, checked: t[o.name] === i.value, onChange: (N) => n({ ...t, [o.name]: N.target.value }), className: "w-4 h-4 text-blue-600 focus:ring-blue-500" }),
                i.label
              ] }, i.value)) });
            case "boolean":
              return /* @__PURE__ */ e("input", { type: "checkbox", checked: !!t[o.name], onChange: (i) => n({ ...t, [o.name]: i.target.checked }), className: "w-5 h-5 mt-1 cursor-pointer accent-blue-600 rounded" });
            case "attachment":
              return /* @__PURE__ */ e("input", { type: "file", required: o.required, onChange: (i) => {
                i.target.files && i.target.files.length > 0 && n({ ...t, [o.name]: i.target.files[0].name });
              }, className: "w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-700 bg-gray-50/50" });
            case "colorPicker":
              return /* @__PURE__ */ e("input", { type: "color", required: o.required, value: t[o.name] || "#000000", onChange: (i) => n({ ...t, [o.name]: i.target.value }), className: "w-16 h-10 p-1 border border-gray-200 rounded-lg cursor-pointer bg-white" });
            case "year":
              return /* @__PURE__ */ e("input", { type: "number", required: o.required, placeholder: "YYYY", value: t[o.name] || "", onChange: (i) => n({ ...t, [o.name]: i.target.value }), className: "w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-700 bg-gray-50/50" });
            case "day":
              return /* @__PURE__ */ e("input", { type: "number", required: o.required, min: "1", max: "31", placeholder: "DD", value: t[o.name] || "", onChange: (i) => n({ ...t, [o.name]: i.target.value }), className: "w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-700 bg-gray-50/50" });
            default:
              const Y = !!((o.type === "datetime-local" || o.type === "datetime" || o.type === "date" || o.type === "time") && (d || m));
              return /* @__PURE__ */ a("div", { className: "relative", children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: Y ? "text" : o.type,
                    required: o.required,
                    placeholder: o.type === "datetime-local" || o.type === "datetime" ? `${d || "YYYY-MM-DD"} ${m || "HH:mm"}` : o.type === "date" ? d || "YYYY-MM-DD" : o.type === "time" ? m || "HH:mm" : "",
                    value: t[o.name] || "",
                    onChange: (i) => n({ ...t, [o.name]: i.target.value }),
                    onClick: () => {
                      Y && q({ name: o.name, type: o.type === "time" ? "time" : "date" });
                    },
                    className: `w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-700 bg-gray-50/50 cursor-pointer ${Y ? "pr-10" : ""}`,
                    readOnly: Y
                  }
                ),
                Y && /* @__PURE__ */ e(
                  "div",
                  {
                    className: "absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 z-10",
                    onClick: () => {
                      q({ name: o.name, type: o.type === "time" ? "time" : "date" });
                    },
                    children: /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                      /* @__PURE__ */ e("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
                      /* @__PURE__ */ e("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
                      /* @__PURE__ */ e("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
                    ] })
                  }
                ),
                Y && $?.name === o.name && $.type === "date" && /* @__PURE__ */ a(se, { children: [
                  /* @__PURE__ */ e("div", { className: "fixed inset-0 z-[60]", onClick: () => q(null) }),
                  /* @__PURE__ */ e(
                    hr,
                    {
                      value: t[o.name] ? u.tz(t[o.name], `${d || "YYYY-MM-DD"} ${m || "HH:mm"}`, f).format(d || "YYYY-MM-DD") : "",
                      onChange: (i) => {
                        let N = i;
                        if (o.type === "datetime-local" || o.type === "datetime") {
                          const P = t[o.name], C = u.tz(P, `${d || "YYYY-MM-DD"} ${m || "HH:mm"}`, f), S = C.isValid() ? C.format(m || "HH:mm") : u().format(m || "HH:mm");
                          N = `${i} ${S}`, q({ name: o.name, type: "time" });
                        } else
                          q(null);
                        n({ ...t, [o.name]: N });
                      },
                      dateFormat: d || "YYYY-MM-DD",
                      timezone: f
                    }
                  )
                ] }),
                Y && $?.name === o.name && $.type === "time" && /* @__PURE__ */ a(se, { children: [
                  /* @__PURE__ */ e("div", { className: "fixed inset-0 z-[60]", onClick: () => q(null) }),
                  /* @__PURE__ */ e(
                    mr,
                    {
                      value: t[o.name] ? u.tz(t[o.name], `${d || "YYYY-MM-DD"} ${m || "HH:mm"}`, f).format(m || "HH:mm") : "",
                      onChange: (i) => {
                        let N = i;
                        if (o.type === "datetime-local" || o.type === "datetime") {
                          const P = t[o.name], C = u.tz(P, `${d || "YYYY-MM-DD"} ${m || "HH:mm"}`, f);
                          N = `${C.isValid() ? C.format(d || "YYYY-MM-DD") : u().format(d || "YYYY-MM-DD")} ${i}`;
                        }
                        n({ ...t, [o.name]: N }), q(null);
                      },
                      timeFormat: m || "HH:mm",
                      slotInterval: ee,
                      timezone: f,
                      enabledTimeSlots: ue,
                      disabledTimeSlots: ce,
                      enabledTimeInterval: ne,
                      disableTimeInterval: Z,
                      checkIsSlotEnabled: er
                    }
                  )
                ] })
              ] });
          }
        })()
      ] }, o.name)),
      /* @__PURE__ */ a("div", { className: "flex justify-between mt-4", children: [
        l && A && /* @__PURE__ */ e(
          "button",
          {
            onClick: () => {
              A(l.id), c();
            },
            className: "text-red-500 hover:text-red-700 text-sm font-medium transition-colors",
            children: "Delete Event"
          }
        ),
        /* @__PURE__ */ a("div", { className: "flex gap-2 ml-auto", children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: c,
              className: "px-5 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600 font-medium",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => {
                try {
                  const o = (N) => {
                    if (console.log("[EventFormModal] parseInTimezone input:", N), !N) return u().utc().toISOString();
                    if (N.includes("T") && (N.includes("Z") || N.split(":").length > 2)) {
                      const C = u(N).toISOString();
                      return console.log("[EventFormModal] recognized ISO:", C), C;
                    }
                    if (d && m) {
                      const C = u.tz(N, `${d} ${m}`, f);
                      if (C.isValid()) {
                        const S = C.toISOString();
                        return console.log("[EventFormModal] parsed via custom format:", S), S;
                      }
                    }
                    const P = u.tz(N, "YYYY-MM-DDTHH:mm", f);
                    if (P.isValid()) {
                      const C = P.toISOString();
                      return console.log("[EventFormModal] parsed via fallback format:", C), C;
                    }
                    return console.warn("[EventFormModal] failed to parse date, returning current time as fallback"), u().utc().toISOString();
                  }, Y = {
                    ...t,
                    start: t.start ? o(t.start) : t.start,
                    end: t.end ? o(t.end) : t.end
                  };
                  console.log("[EventFormModal] finalData:", Y);
                  const i = D.triggerValidateSave(Y);
                  if (i.length > 0) {
                    I(i);
                    return;
                  }
                  if (l) {
                    const N = {
                      ...l,
                      ...Y
                    };
                    x?.(N), D.triggerOnEventChange(N);
                  } else {
                    const N = {
                      id: Date.now().toString(),
                      ...Y
                    };
                    h?.(N);
                  }
                  c();
                } catch (o) {
                  console.error("[EventFormModal] Save Error:", o), alert("SAVE ERROR: " + o.message);
                }
              },
              className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg font-medium",
              children: "Save Event"
            }
          )
        ] })
      ] })
    ] }),
    le.length > 0 && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/60 flex items-center justify-center z-[60] animate-fadeIn", children: /* @__PURE__ */ a(
      "div",
      {
        className: "bg-white rounded-2xl p-8 w-[450px] shadow-2xl border transform animate-scaleIn",
        style: {
          borderColor: v?.theme?.borderColor || "#fee2e2",
          backgroundColor: v?.theme?.backgroundColor || "#fff"
        },
        children: [
          v?.renderHeader ? v.renderHeader(v.title || "Conflict Detected", v.theme || { primaryColor: "#dc2626", secondaryColor: "#ef4444", backgroundColor: "#fff", textColor: "#1f2937", borderColor: "#fee2e2" }) : /* @__PURE__ */ a("div", { className: "flex items-center gap-4 mb-6", style: { color: v?.theme?.primaryColor || "#dc2626" }, children: [
            /* @__PURE__ */ e("div", { className: "w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0", style: { backgroundColor: v?.theme?.secondaryColor + "10" || "#fef2f2" }, children: v?.theme?.icon || /* @__PURE__ */ e("span", { className: "text-2xl", children: "⚠️" }) }),
            /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e("h4", { className: "text-xl font-bold", children: v?.title || "Conflict Detected" }),
              /* @__PURE__ */ e("p", { className: "text-sm opacity-70", children: v?.description || "Overlapping schedule found" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "bg-gray-50 rounded-xl p-4 mb-6 max-h-60 overflow-y-auto border border-gray-100", style: { backgroundColor: v?.theme?.backgroundColor === "#fff" ? "#f9fafb" : v?.theme?.backgroundColor }, children: v?.renderDetails ? v.renderDetails(le) : le.map((o, Y) => /* @__PURE__ */ e("div", { className: "mb-3 last:mb-0", children: /* @__PURE__ */ e("div", { className: "text-sm font-medium text-gray-800 whitespace-pre-line leading-relaxed", style: { color: v?.theme?.textColor || "#1f2937" }, children: o }) }, Y)) }),
          v?.renderFooter ? v.renderFooter(() => I([]), v.theme || { primaryColor: "#dc2626", secondaryColor: "#ef4444", backgroundColor: "#fff", textColor: "#1f2937", borderColor: "#fee2e2" }) : /* @__PURE__ */ e("div", { className: "flex gap-3", children: /* @__PURE__ */ e(
            "button",
            {
              onClick: () => I([]),
              className: "flex-1 px-6 py-3 text-white font-semibold rounded-xl transition-all shadow-lg",
              style: {
                backgroundColor: v?.theme?.primaryColor || "#dc2626",
                boxShadow: `0 10px 15px -3px ${v?.theme?.primaryColor}40` || "0 10px 15px -3px rgba(220, 38, 38, 0.4)"
              },
              children: v?.buttonText || "I'll Fix It"
            }
          ) })
        ]
      }
    ) })
  ] }) : null;
}, gr = {
  classic_red: {
    title: "Conflict Detected",
    description: "Your schedule has overlaps.",
    buttonText: "I'll Fix It",
    theme: {
      primaryColor: "#dc2626",
      secondaryColor: "#fee2e2",
      backgroundColor: "#fff",
      textColor: "#1f2937",
      borderColor: "#fee2e2"
    }
  },
  amber_warning: {
    title: "Scheduling Conflict",
    description: "We found some overlaps in your calendar.",
    buttonText: "Adjust Schedule",
    theme: {
      primaryColor: "#d97706",
      secondaryColor: "#fef3c7",
      backgroundColor: "#fff",
      textColor: "#92400e",
      borderColor: "#fde68a"
    }
  },
  indigo_modern: {
    title: "Overlapping Events",
    description: "Please resolve the following conflicts.",
    buttonText: "Got It",
    theme: {
      primaryColor: "#4f46e5",
      secondaryColor: "#e0e7ff",
      backgroundColor: "#f8fafc",
      textColor: "#1e1b4b",
      borderColor: "#c7d2fe"
    }
  },
  emerald_soft: {
    title: "Time Slot Conflict",
    description: "A few events are clashing.",
    buttonText: "Review",
    theme: {
      primaryColor: "#059669",
      secondaryColor: "#d1fae5",
      backgroundColor: "#fff",
      textColor: "#064e3b",
      borderColor: "#a7f3d0"
    }
  },
  dark_noir: {
    title: "Conflict Alert",
    description: "Overlapping periods detected.",
    buttonText: "Dismiss",
    theme: {
      primaryColor: "#f8fafc",
      secondaryColor: "#334155",
      backgroundColor: "#0f172a",
      textColor: "#f1f5f9",
      borderColor: "#1e293b"
    }
  },
  rose_elegant: {
    title: "Schedule Clash",
    description: "Heads up! Some events overlap.",
    buttonText: "Update Now",
    theme: {
      primaryColor: "#e11d48",
      secondaryColor: "#ffe4e6",
      backgroundColor: "#fff5f5",
      textColor: "#4c0519",
      borderColor: "#fecdd3"
    }
  },
  glassmorphism: {
    title: "Blurred Reality",
    description: "Your schedule is overlapping.",
    buttonText: "Clear Up",
    theme: {
      primaryColor: "#fff",
      secondaryColor: "rgba(255, 255, 255, 0.2)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      textColor: "#fff",
      borderColor: "rgba(255, 255, 255, 0.3)"
    }
  },
  cyberpunk: {
    title: "SYSTEM NEON",
    description: "CONFLICT IN MATRIX DETECTED.",
    buttonText: "REBOOT",
    theme: {
      primaryColor: "#ff00ff",
      secondaryColor: "#00ffff",
      backgroundColor: "#1a1a1a",
      textColor: "#00ff00",
      borderColor: "#ff00ff"
    }
  },
  minimalist: {
    title: "Conflicts",
    description: "Events overlap.",
    buttonText: "Done",
    theme: {
      primaryColor: "#000",
      secondaryColor: "#f3f4f6",
      backgroundColor: "#fff",
      textColor: "#000",
      borderColor: "#e5e7eb"
    }
  },
  high_visibility: {
    title: "ALERT: CONFLICT",
    description: "YOUR EVENTS OVERLAP.",
    buttonText: "FIX NOW",
    theme: {
      primaryColor: "#000",
      secondaryColor: "#ff0",
      backgroundColor: "#ff0",
      textColor: "#000",
      borderColor: "#000"
    }
  }
}, ge = {
  classic_light: {
    primaryColor: "#3b82f6",
    // blue-500
    backgroundColor: "#ffffff",
    secondaryBackgroundColor: "#f9fafb",
    // gray-50
    gridColor: "#e5e7eb",
    // gray-200
    textColor: "#111827",
    // gray-900
    secondaryTextColor: "#6b7280",
    // gray-500
    accentColor: "#eff6ff",
    // blue-50
    eventDefaultColor: "#3b82f6",
    eventDefaultTextColor: "#ffffff"
  },
  dark_night: {
    primaryColor: "#6366f1",
    // indigo-500
    backgroundColor: "#0f172a",
    // slate-900
    secondaryBackgroundColor: "#1e293b",
    // slate-800
    gridColor: "#334155",
    // slate-700
    textColor: "#f8fafc",
    // slate-50
    secondaryTextColor: "#94a3b8",
    // slate-400
    accentColor: "#1e1b4b",
    // indigo-950
    eventDefaultColor: "#6366f1",
    eventDefaultTextColor: "#ffffff"
  },
  slate_modern: {
    primaryColor: "#0ea5e9",
    // sky-500
    backgroundColor: "#f8fafc",
    // slate-50
    secondaryBackgroundColor: "#f1f5f9",
    // slate-100
    gridColor: "#cbd5e1",
    // slate-300
    textColor: "#334155",
    // slate-700
    secondaryTextColor: "#64748b",
    // slate-500
    accentColor: "#e0f2fe",
    // sky-100
    eventDefaultColor: "#0ea5e9",
    eventDefaultTextColor: "#ffffff"
  },
  emerald_forest: {
    primaryColor: "#10b981",
    // emerald-500
    backgroundColor: "#f0fdf4",
    // emerald-50
    secondaryBackgroundColor: "#dcfce7",
    // emerald-100
    gridColor: "#a7f3d0",
    // emerald-200
    textColor: "#064e3b",
    // emerald-950
    secondaryTextColor: "#047857",
    // emerald-700
    accentColor: "#ecfdf5",
    // emerald-50
    eventDefaultColor: "#10b981",
    eventDefaultTextColor: "#ffffff"
  },
  ocean_breeze: {
    primaryColor: "#06b6d4",
    // cyan-500
    backgroundColor: "#ecfeff",
    // cyan-50
    secondaryBackgroundColor: "#cffafe",
    // cyan-100
    gridColor: "#a5f3fc",
    // cyan-200
    textColor: "#164e63",
    // cyan-950
    secondaryTextColor: "#0891b2",
    // cyan-700
    accentColor: "#f0fdfa",
    // teal-50
    eventDefaultColor: "#06b6d4",
    eventDefaultTextColor: "#ffffff"
  },
  midnight_purple: {
    primaryColor: "#a855f7",
    // purple-500
    backgroundColor: "#2e1065",
    // purple-950
    secondaryBackgroundColor: "#4c1d95",
    // purple-900
    gridColor: "#7e22ce",
    // purple-700
    textColor: "#faf5ff",
    // purple-50
    secondaryTextColor: "#d8b4fe",
    // purple-300
    accentColor: "#581c87",
    // purple-900
    eventDefaultColor: "#a855f7",
    eventDefaultTextColor: "#ffffff"
  },
  amber_gold: {
    primaryColor: "#f59e0b",
    // amber-500
    backgroundColor: "#fffbeb",
    // amber-50
    secondaryBackgroundColor: "#fef3c7",
    // amber-100
    gridColor: "#fcd34d",
    // amber-300
    textColor: "#78350f",
    // amber-950
    secondaryTextColor: "#b45309",
    // amber-700
    accentColor: "#fffbeb",
    eventDefaultColor: "#f59e0b",
    eventDefaultTextColor: "#ffffff"
  },
  rose_petal: {
    primaryColor: "#f43f5e",
    // rose-500
    backgroundColor: "#fff1f2",
    // rose-50
    secondaryBackgroundColor: "#ffe4e6",
    // rose-100
    gridColor: "#fda4af",
    // rose-300
    textColor: "#4c0519",
    // rose-950
    secondaryTextColor: "#be123c",
    // rose-700
    accentColor: "#fff1f2",
    eventDefaultColor: "#f43f5e",
    eventDefaultTextColor: "#ffffff"
  },
  minimal_mono: {
    primaryColor: "#18181b",
    // zinc-900
    backgroundColor: "#ffffff",
    secondaryBackgroundColor: "#f4f4f5",
    // zinc-100
    gridColor: "#e4e4e7",
    // zinc-200
    textColor: "#09090b",
    // zinc-950
    secondaryTextColor: "#71717a",
    // zinc-500
    accentColor: "#f4f4f5",
    eventDefaultColor: "#27272a",
    // zinc-800
    eventDefaultTextColor: "#ffffff"
  },
  cyber_punk: {
    primaryColor: "#ff00ff",
    // magenta
    backgroundColor: "#000000",
    secondaryBackgroundColor: "#1a1a1a",
    gridColor: "#3dfaeb",
    // neon cyan
    textColor: "#3dfaeb",
    secondaryTextColor: "#ff00ff",
    accentColor: "#ff00ff22",
    eventDefaultColor: "#ff00ff",
    eventDefaultTextColor: "#000000"
  }
}, xr = ({
  timezone: r = u.tz.guess() || "UTC",
  timezoneLabelInclude: c = !1,
  slotInterval: l = 30,
  dateFormat: t = "YYYY-MM-DD",
  timeFormat: n = "HH:mm",
  showTimeSlots: w = !0,
  selectedDate: f,
  onDateChange: d,
  events: m,
  onEventChange: h,
  navigationPosition: x = "center",
  showTodayBelow: A = !0,
  renderNavigation: D,
  showEmptyState: v = !0,
  enabledTimeSlots: ee,
  disabledTimeSlots: ue,
  enabledTimeInterval: ce,
  disableTimeInterval: ne,
  emptyStateContent: Z,
  emptyStateContentPopup: le,
  futureDaysOnly: I,
  pastDaysOnly: $,
  currentDayOnly: q,
  navigateToFirstEvent: o,
  onAddEvent: Y,
  onEditEvent: i,
  onDeleteEvent: N,
  formFields: P,
  onlyCreateEditRequired: C = !0,
  plugins: S,
  conflictTemplate: re,
  conflictThemeVariant: ye,
  calendarTheme: ie,
  calendarThemeVariant: ae
}) => {
  const L = Fe(null), X = Fe(null), [De, z] = R(() => u.tz(f || /* @__PURE__ */ new Date(), r)), xe = f !== void 0 ? f : De, G = (s) => {
    d ? d(s) : z(s);
  }, [J, te] = R(() => m || []), oe = m !== void 0 ? m : J, g = Y || ((s) => te((p) => [...p, s])), H = i || ((s) => te((p) => p.map((M) => M.id === s.id ? s : M))), V = N || ((s) => te((p) => p.filter((M) => M.id !== s))), ve = P || [
    { name: "title", label: "Event Title", type: "text", required: !0 },
    { name: "description", label: "Description", type: "textarea" },
    { name: "start", label: "Start Time", type: "datetime-local", required: !0 },
    { name: "end", label: "End Time", type: "datetime-local", required: !0 }
  ], K = b(() => ie || (ae && ge[ae] ? ge[ae] : ge.classic_light), [ie, ae]), Ne = b(() => ({
    "--calendar-primary": K.primaryColor,
    "--calendar-bg": K.backgroundColor,
    "--calendar-secondary-bg": K.secondaryBackgroundColor,
    "--calendar-grid": K.gridColor,
    "--calendar-text": K.textColor,
    "--calendar-secondary-text": K.secondaryTextColor,
    "--calendar-accent": K.accentColor,
    "--calendar-event-bg": K.eventDefaultColor,
    "--calendar-event-text": K.eventDefaultTextColor
  }), [K]), Q = b(() => oe ?? [], [oe]), _ = b(() => new tr(S, {
    timezone: r,
    slotInterval: l,
    events: Q,
    onEventChange: h,
    onAddEvent: g,
    onEditEvent: H,
    onDeleteEvent: V
  }), [S, r, l, Q, h, g, H, V]);
  Le(() => {
    _.init();
  }, [_]);
  const k = b(
    () => $e(xe, r),
    [xe, r]
  ), pe = b(() => u.utc().tz(r), [r]), Ye = k.isSame(pe, "day"), [T, B] = R(!1), [de, fe] = R(null), [ke, O] = R({}), me = I && $, _e = !me && I && k.isBefore(u().tz(r), "day") || q && k.isBefore(u().tz(r), "day"), Ae = !me && $ && k.isAfter(u().tz(r), "day") || q && k.isAfter(u().tz(r), "day"), Re = _e || Ae || q && !Ye, y = b(
    () => sr(ce),
    [ce]
  ), E = () => {
    B(!1), fe(null), O({});
  }, F = b(
    () => rr(Q, k, r),
    [Q, k, r]
  ).filter((s) => !s.allDay), j = b(() => {
    _.triggerBeforeRender();
    const s = dr(F, k, l);
    return _.triggerAfterRender(), s;
  }, [F, k, l, _]), he = !q && (me || !(I && k.isSameOrBefore(pe, "day"))), Se = !q && (me || !($ && k.isSameOrAfter(pe, "day"))), He = () => {
    he && G(k.clone().subtract(1, "day"));
  }, Be = () => {
    Se && G(k.clone().add(1, "day"));
  }, qe = () => G(u.utc().tz(r)), [Ee, Me] = R(null), [Oe, nr] = R(null), Ue = (s) => Math.round(s / l) * l;
  Le(() => {
    const s = (M) => {
      if (!X.current) return;
      const be = X.current.getBoundingClientRect(), je = (M.clientY - be.top) / U * l;
      if (Ee) {
        const we = Ue(je), Ce = k.clone().startOf("day").add(we, "minutes"), Te = Ee.end.diff(
          Ee.start,
          "minutes"
        ), Ie = {
          ...Ee,
          start: Ce,
          end: Ce.clone().add(Te, "minutes")
        };
        h?.(Ie), _.triggerOnEventChange(Ie);
      }
      if (Oe) {
        const we = Ue(je), Ce = k.clone().startOf("day").add(we, "minutes");
        if (Ce.isAfter(Oe.start)) {
          const Te = {
            ...Oe,
            end: Ce
          };
          h?.(Te), _.triggerOnEventChange(Te);
        }
      }
    }, p = () => {
      Me(null), nr(null);
    };
    return window.addEventListener("mousemove", s), window.addEventListener("mouseup", p), () => {
      window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", p);
    };
  }, [Ee, Oe, k, l, h]);
  const Ze = (s, p) => {
    let M;
    if (p)
      M = p.clone();
    else if (X.current) {
      const Ve = X.current.getBoundingClientRect(), we = (s.clientY - Ve.top) / U * l, Ce = Ue(we);
      M = k.clone().startOf("day").add(Ce, "minutes");
    } else
      return;
    if (!ze(M)) return;
    const be = M.clone().add(l, "minutes");
    fe(null), O({
      start: M.format(`${t || "YYYY-MM-DD"} ${n || "HH:mm"}`),
      end: be.format(`${t || "YYYY-MM-DD"} ${n || "HH:mm"}`)
    }), B(!0);
  }, Xe = b(
    () => cr(k, l),
    [k, l]
  ), ze = (s) => er(
    s,
    ee,
    ue,
    ce,
    ne
  );
  lr(() => {
    L.current && (L.current.scrollTop = 0);
  }, [k, o]), Le(() => {
    if (!L.current || !o) return;
    const s = setTimeout(() => {
      L.current && requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!L.current) return;
          let p = 0;
          if (j.length > 0)
            p = j[0].top;
          else {
            const M = Xe.findIndex((be) => ze(be));
            M !== -1 && (p = M * U);
          }
          if (p > 0) {
            const M = Math.max(0, p - U), be = L.current.scrollTop, Ve = M - be, je = 2e3;
            let we = null;
            const Ce = (Te) => {
              we === null && (we = Te);
              const Ie = Te - we, Pe = Ie / je, ur = Pe < 0.5 ? 4 * Pe * Pe * Pe : 1 - Math.pow(-2 * Pe + 2, 3) / 2;
              L.current && (L.current.scrollTop = be + Ve * ur, Ie < je ? requestAnimationFrame(Ce) : L.current.scrollTop = M);
            };
            requestAnimationFrame(Ce);
          }
        });
      });
    }, 100);
    return () => clearTimeout(s);
  }, [k, j.length, o]);
  const Ge = /* @__PURE__ */ a("div", { className: "text-center flex flex-col items-center", children: [
    /* @__PURE__ */ e("h2", { className: "text-xl font-semibold px-4 py-1 rounded-full text-white", style: Ye ? { backgroundColor: "var(--calendar-primary)" } : { color: "var(--calendar-text)" }, children: k.format(t) }),
    c && /* @__PURE__ */ a("p", { className: "text-xs text-gray-500 mt-1", children: [
      "GMT",
      k.format("Z"),
      " • ",
      r
    ] }),
    A && /* @__PURE__ */ e("button", { onClick: qe, className: "mt-1 text-sm font-medium", style: { color: "var(--calendar-primary)" }, children: "Today" })
  ] }), Je = /* @__PURE__ */ e(
    "button",
    {
      onClick: He,
      disabled: !he,
      className: `px-3 py-1 rounded ${he ? "hover:bg-gray-200" : "opacity-50 cursor-not-allowed"}`,
      children: "◀"
    }
  ), Ke = /* @__PURE__ */ e(
    "button",
    {
      onClick: Be,
      disabled: !Se,
      className: `px-3 py-1 rounded ${Se ? "hover:bg-gray-200" : "opacity-50 cursor-not-allowed"}`,
      children: "▶"
    }
  ), Qe = /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
    Je,
    Ke
  ] }), ir = D ? D({
    goToPreviousDay: He,
    goToNextDay: Be,
    goToToday: qe,
    dateNode: Ge,
    prevNode: Je,
    nextNode: Ke,
    defaultNav: Qe,
    currentDate: k,
    timezone: r
  }) : null;
  return /* @__PURE__ */ a("div", { className: "flex flex-col flex-1 h-full w-full min-h-0 no-scrollbar", style: { ...Ne, backgroundColor: "var(--calendar-bg)", color: "var(--calendar-text)" }, children: [
    D != null ? /* @__PURE__ */ e("div", { children: ir }, "custom-nav-wrapper") : /* @__PURE__ */ a("div", { className: "sticky top-0 z-20 border-b px-6 py-4 flex items-center min-h-[80px]", style: { backgroundColor: "var(--calendar-bg)", borderColor: "var(--calendar-grid)" }, children: [
      x === "left" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center", children: Qe }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: Ge }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      x === "center" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ a("div", { className: "flex-1 flex justify-center items-center gap-4", children: [
          Je,
          Ge,
          Ke
        ] }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      x === "right" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: Ge }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center gap-4", children: Qe })
      ] })
    ] }),
    w === !1 ? /* @__PURE__ */ a("div", { className: "flex flex-col flex-1 min-h-0 m-5 p-4 overflow-y-auto no-scrollbar relative", children: [
      C && /* @__PURE__ */ e("div", { className: "flex justify-end mb-4", children: /* @__PURE__ */ e(
        "button",
        {
          onClick: () => {
            fe(null);
            const s = k.clone().hour(9).minute(0), p = s.clone().add(l, "minutes");
            O({
              start: s.format("YYYY-MM-DDTHH:mm"),
              end: p.format("YYYY-MM-DDTHH:mm")
            }), B(!0);
          },
          className: "px-4 py-2 text-sm text-white rounded shadow transition-colors",
          style: { backgroundColor: "var(--calendar-primary)" },
          children: "+ Add Event"
        }
      ) }),
      F.length === 0 ? /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center flex-1 h-full min-h-[200px] border-2 border-dashed rounded-xl", style: { borderColor: "var(--calendar-grid)" }, children: /* @__PURE__ */ e("p", { className: "text-gray-500 font-medium mb-4", children: Z || "No events scheduled" }) }) : /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 pb-8", children: F.sort((s, p) => u(s.start).diff(u(p.start))).map((s) => /* @__PURE__ */ a(
        "div",
        {
          onClick: (p) => {
            p.stopPropagation(), _.triggerOnEventClick(s), C && (fe(s), O({
              ...s,
              start: u(s.start).tz(r).format("YYYY-MM-DDTHH:mm"),
              end: u(s.end).tz(r).format("YYYY-MM-DDTHH:mm")
            }), B(!0));
          },
          className: "p-4 rounded-xl border flex flex-col cursor-pointer transition-transform hover:scale-[1.01] shadow-sm relative group",
          style: {
            backgroundColor: "var(--calendar-event-bg)",
            color: "var(--calendar-event-text)",
            borderColor: "var(--calendar-grid)",
            borderLeft: "4px solid var(--calendar-primary)"
          },
          children: [
            /* @__PURE__ */ a("div", { className: "flex justify-between items-start", children: [
              /* @__PURE__ */ e("div", { className: "font-semibold text-base", children: s.title }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: (p) => {
                    p.stopPropagation(), V(s.id);
                  },
                  className: "text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors",
                  title: "Delete Event",
                  children: "✕"
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "text-sm opacity-80 mt-1", children: [
              u(s.start).tz(r).format(n),
              " - ",
              u(s.end).tz(r).format(n)
            ] })
          ]
        },
        s.id
      )) })
    ] }) : /* @__PURE__ */ e("div", { ref: L, className: "flex-1 overflow-y-auto no-scrollbar", children: /* @__PURE__ */ a("div", { className: "flex min-h-full", children: [
      /* @__PURE__ */ e("div", { className: "w-24 flex-shrink-0", style: { backgroundColor: "var(--calendar-secondary-bg)" }, children: Xe.map((s, p) => {
        const M = ze(s);
        return /* @__PURE__ */ e(
          "div",
          {
            className: "relative text-xs text-right pr-3 border-b border-dotted border-r",
            style: {
              height: U,
              borderColor: "var(--calendar-grid)",
              color: M ? "var(--calendar-secondary-text)" : "var(--calendar-grid)",
              cursor: M ? "pointer" : "not-allowed",
              backgroundColor: M ? "transparent" : "var(--calendar-secondary-bg)"
            },
            children: /* @__PURE__ */ e("span", { className: "absolute top-1/2 -translate-y-1/2 right-2", children: s.format(n) })
          },
          p
        );
      }) }),
      /* @__PURE__ */ a("div", { ref: X, className: "flex-1 relative", onDoubleClick: (s) => Ze(s), children: [
        Xe.map((s, p) => {
          const M = ze(s);
          return /* @__PURE__ */ e(
            "div",
            {
              onDoubleClick: (be) => {
                be.stopPropagation(), M && Ze(be, s);
              },
              style: {
                height: U,
                borderColor: "var(--calendar-grid)",
                cursor: M ? "pointer" : "not-allowed",
                backgroundColor: M ? "transparent" : "rgba(0,0,0,0.02)"
              },
              className: `border-b border-dotted transition-colors ${M ? "hover:bg-gray-50" : ""}`
            },
            p
          );
        }),
        j.map((s) => /* @__PURE__ */ a(
          "div",
          {
            ref: (p) => {
              p && _.triggerOnEventRender(s, p);
            },
            onMouseDown: () => Me(s),
            onDoubleClick: (p) => {
              p.stopPropagation(), _.triggerOnEventClick(s), H && (fe(s), O({
                ...s,
                start: u(s.start).tz(r).format(`${t || "YYYY-MM-DD"} ${n || "HH:mm"}`),
                end: u(s.end).tz(r).format(`${t || "YYYY-MM-DD"} ${n || "HH:mm"}`)
              }), B(!0));
            },
            className: "absolute rounded px-2 text-sm cursor-move z-10",
            style: {
              top: s.top,
              height: s.height,
              left: `${s.columnIndex / s.columnCount * 100}%`,
              width: `${100 / s.columnCount}%`,
              backgroundColor: "var(--calendar-event-bg)",
              color: "var(--calendar-event-text)"
            },
            children: [
              s.title,
              V && /* @__PURE__ */ e(
                "button",
                {
                  onClick: (p) => {
                    p.stopPropagation(), V(s.id);
                  },
                  className: "absolute top-1 right-1 text-xs bg-red-500 rounded px-1",
                  children: "✕"
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  onMouseDown: (p) => {
                    p.stopPropagation(), nr(s);
                  },
                  className: "absolute bottom-0 left-0 right-0 h-2 cursor-ns-resize",
                  style: { backgroundColor: "var(--calendar-primary)", opacity: 0.5 }
                }
              )
            ]
          },
          s.id
        )),
        v && j.length === 0 && !Re && /* @__PURE__ */ e(
          "div",
          {
            className: "absolute left-0 right-0 flex items-center justify-center animate-fadeIn",
            onDoubleClick: (s) => {
              Re || Ze(s);
            },
            style: {
              top: y.startMinutes / l * U,
              height: (y.endMinutes - y.startMinutes) / l * U,
              cursor: Re ? "not-allowed" : "pointer"
            },
            children: /* @__PURE__ */ a("div", { className: "bg-white shadow-xl rounded-2xl px-8 py-6 border text-center animate-scaleIn", children: [
              /* @__PURE__ */ e("p", { className: "text-gray-600 font-medium", children: Z || "No events scheduled" }),
              le || /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    fe(null), O({}), B(!0);
                  },
                  className: "mt-4 px-4 py-2 text-white rounded",
                  style: { backgroundColor: "var(--calendar-primary)" },
                  children: "Add Event"
                }
              )
            ] })
          }
        ),
        Ye && /* @__PURE__ */ e(
          "div",
          {
            className: "absolute left-0 right-0 border-t-2",
            style: {
              borderColor: "var(--calendar-primary)",
              top: (pe.hours() * 60 + pe.minutes()) / l * U
            }
          }
        )
      ] })
    ] }) }),
    C && /* @__PURE__ */ e(
      or,
      {
        isOpen: T,
        onClose: E,
        editingEvent: de,
        formData: ke,
        setFormData: O,
        formFields: ve,
        timezone: r,
        dateFormat: t,
        timeFormat: n,
        onAddEvent: g,
        onEditEvent: H,
        onDeleteEvent: V,
        pluginManager: _,
        conflictTemplate: re || (ye ? gr[ye] : void 0),
        slotInterval: l,
        enabledTimeSlots: ee,
        disabledTimeSlots: ue,
        enabledTimeInterval: ce,
        disableTimeInterval: ne,
        events: Q
      }
    )
  ] });
}, Cr = ({
  timezone: r = u.tz.guess() || "UTC",
  timezoneLabelInclude: c = !1,
  slotInterval: l = 30,
  dateFormat: t = "YYYY-MM-DD",
  timeFormat: n = "HH:mm",
  selectedDate: w,
  onDateChange: f,
  events: d,
  onEventChange: m,
  navigationPosition: h = "center",
  renderNavigation: x,
  showEmptyState: A = !0,
  enabledTimeSlots: D,
  disabledTimeSlots: v,
  enabledTimeInterval: ee,
  disableTimeInterval: ue,
  onAddEvent: ce,
  onEditEvent: ne,
  onDeleteEvent: Z,
  formFields: le,
  onlyCreateEditRequired: I = !0,
  navigateToFirstEvent: $,
  plugins: q,
  calendarTheme: o,
  calendarThemeVariant: Y
}) => {
  const i = Fe(null), [N, P] = R(() => u.tz(w || /* @__PURE__ */ new Date(), r)), C = w !== void 0 ? w : N, S = (y) => {
    f ? f(y) : P(y);
  }, [re, ye] = R(() => d || []), ie = d !== void 0 ? d : re, ae = ce || ((y) => ye((E) => [...E, y])), L = ne || ((y) => ye((E) => E.map((W) => W.id === y.id ? y : W))), X = Z || ((y) => ye((E) => E.filter((W) => W.id !== y))), De = le || [
    { name: "title", label: "Event Title", type: "text", required: !0 },
    { name: "description", label: "Description", type: "textarea" },
    { name: "start", label: "Start Time", type: "datetime-local", required: !0 },
    { name: "end", label: "End Time", type: "datetime-local", required: !0 }
  ], z = b(() => o || (Y && ge[Y] ? ge[Y] : ge.classic_light), [o, Y]), xe = b(() => ({
    "--calendar-primary": z.primaryColor,
    "--calendar-bg": z.backgroundColor,
    "--calendar-secondary-bg": z.secondaryBackgroundColor,
    "--calendar-grid": z.gridColor,
    "--calendar-text": z.textColor,
    "--calendar-secondary-text": z.secondaryTextColor,
    "--calendar-accent": z.accentColor,
    "--calendar-event-bg": z.eventDefaultColor,
    "--calendar-event-text": z.eventDefaultTextColor
  }), [z]), G = b(() => ie ?? [], [ie]), J = b(() => new tr(q, {
    timezone: r,
    slotInterval: l,
    events: G,
    onEventChange: m,
    onAddEvent: ae,
    onEditEvent: L,
    onDeleteEvent: X
  }), [q, r, l, G, m, ae, L, X]);
  Le(() => {
    J.init();
  }, [J]);
  const te = b(
    () => $e(C, r),
    [C, r]
  ), oe = b(() => te.clone().startOf("week"), [te]), g = b(() => {
    const y = [];
    for (let E = 0; E < 7; E++)
      y.push(oe.clone().add(E, "days"));
    return y;
  }, [oe]), H = b(() => u.utc().tz(r), [r]), [V, ve] = R(!1), [K, Ne] = R(null), [Q, _] = R({}), k = b(
    () => sr(ee),
    [ee]
  ), pe = () => {
    ve(!1), Ne(null), _({});
  }, Ye = () => S(te.clone().subtract(1, "week")), T = () => S(te.clone().add(1, "week")), B = () => S(u.utc().tz(r)), de = b(
    () => cr(oe, l),
    [oe, l]
  ), fe = (y) => er(
    y,
    D,
    v,
    ee,
    ue
  ), ke = b(() => {
    J.triggerBeforeRender();
    const y = g.map((E) => {
      const W = rr(G, E, r).filter((F) => !F.allDay);
      return dr(W, E, l);
    });
    return J.triggerAfterRender(), y;
  }, [g, G, r, l, J]);
  lr(() => {
    i.current && (i.current.scrollTop = 0);
  }, [oe, $]), Le(() => {
    if (!i.current || !$) return;
    const y = setTimeout(() => {
      i.current && requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!i.current) return;
          let E = 1 / 0;
          ke.forEach((F) => {
            F.length > 0 && (E = Math.min(E, F[0].top));
          });
          let W = 0;
          if (E !== 1 / 0)
            W = E;
          else {
            const F = de.findIndex((j) => fe(j));
            F !== -1 && (W = F * U);
          }
          if (W > 0) {
            const F = Math.max(0, W - U), j = i.current.scrollTop, he = F - j, Se = 2e3;
            let He = null;
            const Be = (qe) => {
              He === null && (He = qe);
              const Ee = qe - He, Me = Ee / Se, Oe = Me < 0.5 ? 4 * Me * Me * Me : 1 - Math.pow(-2 * Me + 2, 3) / 2;
              i.current && (i.current.scrollTop = j + he * Oe, Ee < Se ? requestAnimationFrame(Be) : i.current.scrollTop = F);
            };
            requestAnimationFrame(Be);
          }
        });
      });
    }, 100);
    return () => clearTimeout(y);
  }, [oe, ke, $]);
  const O = /* @__PURE__ */ a("div", { className: "text-center flex flex-col items-center", children: [
    /* @__PURE__ */ e("h2", { className: "text-xl font-semibold", children: oe.format("MMMM YYYY") }),
    c && /* @__PURE__ */ a("p", { className: "text-xs text-gray-500 mt-1", children: [
      "GMT",
      te.format("Z"),
      " • ",
      r
    ] }),
    /* @__PURE__ */ e("button", { onClick: B, className: "mt-1 text-sm font-medium", style: { color: "var(--calendar-primary)" }, children: "Today" })
  ] }), me = /* @__PURE__ */ e(
    "button",
    {
      onClick: Ye,
      className: "px-3 py-1 rounded hover:bg-gray-200",
      children: "◀"
    }
  ), _e = /* @__PURE__ */ e(
    "button",
    {
      onClick: T,
      className: "px-3 py-1 rounded hover:bg-gray-200",
      children: "▶"
    }
  ), Ae = /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
    me,
    _e
  ] }), Re = x ? x({
    goToPreviousDay: Ye,
    goToNextDay: T,
    goToToday: B,
    dateNode: O,
    prevNode: me,
    nextNode: _e,
    defaultNav: Ae,
    currentDate: oe,
    timezone: r
  }) : null;
  return /* @__PURE__ */ a("div", { className: "flex flex-col flex-1 h-full w-full min-h-0 no-scrollbar", style: { ...xe, backgroundColor: "var(--calendar-bg)", color: "var(--calendar-text)" }, children: [
    x != null ? /* @__PURE__ */ e("div", { children: Re }, "custom-nav-wrapper") : /* @__PURE__ */ a("div", { className: "sticky top-0 z-20 border-b px-6 py-4 flex items-center min-h-[80px]", style: { backgroundColor: "var(--calendar-bg)", borderColor: "var(--calendar-grid)" }, children: [
      h === "left" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center", children: Ae }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: O }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      h === "center" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ a("div", { className: "flex-1 flex justify-center items-center gap-4", children: [
          me,
          O,
          _e
        ] }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      h === "right" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: O }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center gap-4", children: Ae })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "flex flex-1 flex-col min-h-0 m-5 mt-2 overflow-hidden", style: { backgroundColor: "var(--calendar-bg)" }, children: [
      /* @__PURE__ */ a("div", { className: "flex border-b", style: { borderColor: "var(--calendar-grid)" }, children: [
        /* @__PURE__ */ e("div", { className: "w-24 flex-shrink-0" }),
        /* @__PURE__ */ e("div", { className: "flex flex-1 min-w-[700px]", children: g.map((y, E) => /* @__PURE__ */ a("div", { className: "flex-1 text-center font-medium py-3", style: { color: "var(--calendar-text)" }, children: [
          /* @__PURE__ */ e("div", { className: "text-xs uppercase tracking-wider", style: { color: "var(--calendar-secondary-text)" }, children: y.format("ddd") }),
          /* @__PURE__ */ e(
            "div",
            {
              className: `text-2xl mt-1 w-10 h-10 flex items-center justify-center mx-auto rounded-full ${y.isSame(H, "day") ? "text-white" : ""}`,
              style: y.isSame(H, "day") ? { backgroundColor: "var(--calendar-primary)" } : {},
              children: y.format("D")
            }
          )
        ] }, E)) })
      ] }),
      /* @__PURE__ */ e("div", { ref: i, className: "flex-1 overflow-y-auto overflow-x-hidden no-scrollbar relative", children: /* @__PURE__ */ a("div", { className: "flex min-h-full", children: [
        /* @__PURE__ */ e("div", { className: "w-24 flex-shrink-0 z-10 sticky left-0 shadow-[1px_0_5px_rgba(0,0,0,0.02)]", style: { backgroundColor: "var(--calendar-bg)" }, children: de.map((y, E) => {
          const W = fe(y);
          return /* @__PURE__ */ e(
            "div",
            {
              className: "relative text-xs text-right pr-3 border-b border-dotted",
              style: {
                height: U,
                borderColor: "var(--calendar-grid)",
                color: W ? "var(--calendar-secondary-text)" : "var(--calendar-grid)",
                backgroundColor: W ? "transparent" : "var(--calendar-secondary-bg)"
              },
              children: /* @__PURE__ */ e("span", { className: "absolute top-1/2 -translate-y-1/2 right-2 px-1", style: { backgroundColor: "var(--calendar-bg)" }, children: y.format(n) })
            },
            E
          );
        }) }),
        /* @__PURE__ */ a("div", { className: "flex flex-1 relative min-w-[700px]", style: { backgroundColor: "var(--calendar-bg)" }, children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 pointer-events-none", children: de.map((y, E) => /* @__PURE__ */ e(
            "div",
            {
              style: { height: U, borderColor: "var(--calendar-grid)" },
              className: "border-b border-dotted w-full"
            },
            `row-${E}`
          )) }),
          g.map((y, E) => {
            const W = ke[E], F = y.isSame(H, "day");
            return /* @__PURE__ */ a("div", { className: "flex-1 relative", children: [
              /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0 bg-transparent cursor-pointer", onDoubleClick: () => {
                I && (_({ start: y.clone().hour(9).format(`${t || "YYYY-MM-DD"} ${n || "HH:mm"}`) }), ve(!0));
              } }),
              F && /* @__PURE__ */ e(
                "div",
                {
                  className: "absolute left-0 right-0 border-t-2 z-10",
                  style: {
                    borderColor: "var(--calendar-primary)",
                    top: (H.hours() * 60 + H.minutes()) / l * U,
                    boxShadow: "0 0 8px var(--calendar-primary-alpha40)"
                  },
                  children: /* @__PURE__ */ e("div", { className: "absolute -left-1 -top-[5px] w-2 h-2 rounded-full", style: { backgroundColor: "var(--calendar-primary)" } })
                }
              ),
              A && W.length === 0 && /* @__PURE__ */ e(
                "div",
                {
                  className: "absolute left-1 right-1 flex items-center justify-center animate-fadeIn opacity-50",
                  style: {
                    top: k.startMinutes / l * U,
                    height: (k.endMinutes - k.startMinutes) / l * U
                  },
                  children: /* @__PURE__ */ e("div", { className: "text-xs font-medium", style: { color: "var(--calendar-secondary-text)" }, children: "Clear" })
                }
              ),
              /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 pointer-events-none", children: W.map((j) => /* @__PURE__ */ a(
                "div",
                {
                  onDoubleClick: (he) => {
                    he.stopPropagation(), J.triggerOnEventClick(j), I && (Ne(j), _({
                      ...j,
                      start: u(j.start).tz(r).format(`${t || "YYYY-MM-DD"} ${n || "HH:mm"}`),
                      end: u(j.end).tz(r).format(`${t || "YYYY-MM-DD"} ${n || "HH:mm"}`)
                    }), ve(!0));
                  },
                  ref: (he) => {
                    he && J.triggerOnEventRender(j, he);
                  },
                  className: "absolute rounded-[4px] px-2 text-xs font-medium cursor-pointer shadow-sm hover:z-20 border pointer-events-auto transition-all overflow-hidden",
                  style: {
                    top: j.top,
                    height: Math.max(j.height, 20),
                    left: `${j.columnIndex / j.columnCount * 100}%`,
                    width: `calc(${100 / j.columnCount}% - 2px)`,
                    // Small margin
                    backgroundColor: "var(--calendar-event-bg)",
                    color: "var(--calendar-event-text)",
                    borderColor: "var(--calendar-grid)"
                  },
                  children: [
                    /* @__PURE__ */ e("div", { className: "truncate", children: j.title }),
                    X && I && /* @__PURE__ */ e(
                      "button",
                      {
                        onClick: (he) => {
                          he.stopPropagation(), X(j.id);
                        },
                        className: "absolute top-[2px] right-[2px] w-4 h-4 text-[10px] leading-none bg-red-500 hover:bg-red-600 rounded flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity flex-shrink-0",
                        children: "✕"
                      }
                    )
                  ]
                },
                j.id
              )) })
            ] }, y.format("YYYY-MM-DD"));
          })
        ] })
      ] }) }),
      I && /* @__PURE__ */ e(
        or,
        {
          isOpen: V,
          onClose: pe,
          editingEvent: K,
          formData: Q,
          setFormData: _,
          formFields: De,
          timezone: r,
          dateFormat: t,
          timeFormat: n,
          onAddEvent: ae,
          onEditEvent: L,
          onDeleteEvent: X,
          pluginManager: J,
          disableTimeInterval: ue,
          events: G
        }
      )
    ] })
  ] });
}, Nr = ({
  timezone: r = u.tz.guess() || "UTC",
  timezoneLabelInclude: c = !1,
  dateFormat: l = "MMMM YYYY",
  timeFormat: t = "HH:mm",
  selectedDate: n,
  onDateChange: w,
  events: f,
  onEventChange: d,
  navigationPosition: m = "center",
  renderNavigation: h,
  onAddEvent: x,
  onEditEvent: A,
  onDeleteEvent: D,
  formFields: v,
  onlyCreateEditRequired: ee = !0,
  plugins: ue,
  calendarTheme: ce,
  calendarThemeVariant: ne
}) => {
  const [Z, le] = R(() => u.tz(n || /* @__PURE__ */ new Date(), r)), I = n !== void 0 ? n : Z, $ = (T) => {
    w ? w(T) : le(T);
  }, [q, o] = R(() => f || []), Y = f !== void 0 ? f : q, i = x || ((T) => o((B) => [...B, T])), N = A || ((T) => o((B) => B.map((de) => de.id === T.id ? T : de))), P = D || ((T) => o((B) => B.filter((de) => de.id !== T))), C = v || [
    { name: "title", label: "Event Title", type: "text", required: !0 },
    { name: "description", label: "Description", type: "textarea" },
    { name: "start", label: "Start Time", type: "datetime-local", required: !0 },
    { name: "end", label: "End Time", type: "datetime-local", required: !0 }
  ], S = b(
    () => $e(I, r),
    [I, r]
  ), re = b(() => ce || (ne && ge[ne] ? ge[ne] : ge.classic_light), [ce, ne]), ye = b(() => ({
    "--calendar-primary": re.primaryColor,
    "--calendar-bg": re.backgroundColor,
    "--calendar-secondary-bg": re.secondaryBackgroundColor,
    "--calendar-grid": re.gridColor,
    "--calendar-text": re.textColor,
    "--calendar-secondary-text": re.secondaryTextColor,
    "--calendar-accent": re.accentColor,
    "--calendar-event-bg": re.eventDefaultColor,
    "--calendar-event-text": re.eventDefaultTextColor
  }), [re]), ie = b(() => Y ?? [], [Y]), ae = b(() => new tr(ue, {
    timezone: r,
    slotInterval: 30,
    // Placeholder for MonthView
    events: ie,
    onEventChange: d,
    onAddEvent: i,
    onEditEvent: N,
    onDeleteEvent: P
  }), [ue, r, ie, d, i, N, P]), [L, X] = R(!1), [De, z] = R(null), [xe, G] = R({}), J = b(() => S.clone().startOf("month"), [S]), te = b(() => S.clone().endOf("month"), [S]), oe = b(() => J.clone().startOf("week"), [J]), g = b(() => te.clone().endOf("week"), [te]), H = b(() => {
    const T = [];
    let B = oe.clone();
    for (; B.isBefore(g) || B.isSame(g, "day"); )
      T.push(B.clone()), B.add(1, "day");
    return T;
  }, [oe, g]), V = () => $(S.clone().subtract(1, "month")), ve = () => $(S.clone().add(1, "month")), K = () => $(u.utc().tz(r)), Ne = () => {
    X(!1), z(null), G({});
  }, Q = /* @__PURE__ */ a("div", { className: "text-center flex flex-col items-center", children: [
    /* @__PURE__ */ e("h2", { className: "text-xl font-semibold", children: S.format(l) }),
    c && /* @__PURE__ */ a("p", { className: "text-xs mt-1", style: { color: "var(--calendar-secondary-text)" }, children: [
      "GMT",
      S.format("Z"),
      " • ",
      r
    ] }),
    /* @__PURE__ */ e("button", { onClick: K, className: "mt-1 text-sm font-medium", style: { color: "var(--calendar-primary)" }, children: "Today" })
  ] }), _ = /* @__PURE__ */ e("button", { onClick: V, className: "px-3 py-1 rounded hover:opacity-70 transition-opacity", style: { color: "var(--calendar-text)" }, children: "◀" }), k = /* @__PURE__ */ e("button", { onClick: ve, className: "px-3 py-1 rounded hover:opacity-70 transition-opacity", style: { color: "var(--calendar-text)" }, children: "▶" }), pe = /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
    _,
    k
  ] }), Ye = h ? h({
    goToPreviousDay: V,
    goToNextDay: ve,
    goToToday: K,
    dateNode: Q,
    prevNode: _,
    nextNode: k,
    defaultNav: pe,
    currentDate: S,
    timezone: r
  }) : null;
  return /* @__PURE__ */ a("div", { className: "flex flex-col flex-1 h-full w-full min-h-0 no-scrollbar", style: { ...ye, backgroundColor: "var(--calendar-bg)", color: "var(--calendar-text)" }, children: [
    h != null ? /* @__PURE__ */ e("div", { children: Ye }, "custom-nav-wrapper") : /* @__PURE__ */ a("div", { className: "sticky top-0 z-20 border-b px-6 py-4 flex items-center min-h-[80px]", style: { backgroundColor: "var(--calendar-bg)", borderColor: "var(--calendar-grid)" }, children: [
      m === "left" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center", children: pe }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: Q }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      m === "center" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ a("div", { className: "flex-1 flex justify-center items-center gap-4", children: [
          _,
          Q,
          k
        ] }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      m === "right" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: Q }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center gap-4", children: pe })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-7 border-b", style: { borderColor: "var(--calendar-grid)" }, children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((T) => /* @__PURE__ */ e("div", { className: "py-2 text-center text-xs font-semibold uppercase tracking-wider", style: { color: "var(--calendar-secondary-text)" }, children: T }, T)) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto no-scrollbar", children: /* @__PURE__ */ e("div", { className: "grid grid-cols-7 min-h-full", children: H.map((T, B) => {
      const de = T.isSame(S, "month"), fe = T.isSame(u().tz(r), "day"), ke = rr(ie, T, r);
      return /* @__PURE__ */ a(
        "div",
        {
          className: "min-h-[120px] border-b border-r p-1 flex flex-col gap-1 transition-colors hover:bg-opacity-10",
          style: {
            borderColor: "var(--calendar-grid)",
            backgroundColor: de ? "transparent" : "var(--calendar-secondary-bg)",
            opacity: de ? 1 : 0.5
          },
          onDoubleClick: () => {
            if (ee) {
              const O = T.clone().hour(9).minute(0), me = O.clone().add(1, "hour");
              G({
                start: O.format(`${l || "YYYY-MM-DD"}T${t || "HH:mm"}`),
                end: me.format(`${l || "YYYY-MM-DD"}T${t || "HH:mm"}`)
              }), X(!0);
            }
          },
          children: [
            /* @__PURE__ */ e("div", { className: "flex justify-end pr-1", children: /* @__PURE__ */ e(
              "span",
              {
                className: `text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${fe ? "text-white" : ""}`,
                style: fe ? { backgroundColor: "var(--calendar-primary)" } : { color: de ? "var(--calendar-text)" : "var(--calendar-secondary-text)" },
                children: T.date()
              }
            ) }),
            /* @__PURE__ */ a("div", { className: "flex flex-col gap-1 flex-1 overflow-hidden", children: [
              ke.slice(0, 4).map((O) => /* @__PURE__ */ e(
                "div",
                {
                  onClick: (me) => {
                    me.stopPropagation(), ae.triggerOnEventClick(O), ee && (z(O), G({
                      ...O,
                      start: u(O.start).tz(r).format(`${l || "YYYY-MM-DD"}T${t || "HH:mm"}`),
                      end: u(O.end).tz(r).format(`${l || "YYYY-MM-DD"}T${t || "HH:mm"}`)
                    }), X(!0));
                  },
                  className: "px-1.5 py-0.5 rounded text-[10px] truncate cursor-pointer transition-transform hover:scale-[1.02]",
                  style: {
                    backgroundColor: "var(--calendar-event-bg)",
                    color: "var(--calendar-event-text)",
                    border: O.hasConflict ? "1px solid red" : "none"
                  },
                  title: O.title,
                  children: O.title
                },
                O.id
              )),
              ke.length > 4 && /* @__PURE__ */ a("div", { className: "text-[9px] px-1 font-bold", style: { color: "var(--calendar-secondary-text)" }, children: [
                "+",
                ke.length - 4,
                " more"
              ] })
            ] })
          ]
        },
        B
      );
    }) }) }),
    ee && /* @__PURE__ */ e(
      or,
      {
        isOpen: L,
        onClose: Ne,
        editingEvent: De,
        formData: xe,
        setFormData: G,
        formFields: C,
        timezone: r,
        dateFormat: l,
        timeFormat: t,
        onAddEvent: i,
        onEditEvent: N,
        onDeleteEvent: P,
        pluginManager: ae,
        events: Y
      }
    )
  ] });
}, kr = (r) => {
  const {
    timezone: c = u.tz.guess() || "UTC",
    selectedDate: l,
    onDateChange: t,
    events: n,
    onAddEvent: w,
    onEditEvent: f,
    onDeleteEvent: d,
    calendarTheme: m,
    calendarThemeVariant: h,
    navigationPosition: x = "center",
    renderNavigation: A,
    dateFormat: D = "MMMM YYYY",
    timeFormat: v = "HH:mm",
    showTimeSlots: ee = !1
  } = r, [ue, ce] = R(() => u.tz(l || /* @__PURE__ */ new Date(), c)), ne = l !== void 0 ? l : ue, Z = b(
    () => $e(ne, c),
    [ne, c]
  ), [le, I] = R(() => Z.clone().startOf("month")), $ = (g) => {
    t ? t(g) : ce(g), I(g.clone().startOf("month"));
  }, [q, o] = R(() => n || []), Y = n !== void 0 ? n : q, i = w || ((g) => o((H) => [...H, g])), N = f || ((g) => o((H) => H.map((V) => V.id === g.id ? g : V))), P = d || ((g) => o((H) => H.filter((V) => V.id !== g))), C = b(() => m || (h && ge[h] ? ge[h] : ge.classic_light), [m, h]), S = b(() => ({
    "--calendar-primary": C.primaryColor,
    "--calendar-bg": C.backgroundColor,
    "--calendar-secondary-bg": C.secondaryBackgroundColor,
    "--calendar-grid": C.gridColor,
    "--calendar-text": C.textColor,
    "--calendar-secondary-text": C.secondaryTextColor,
    "--calendar-accent": C.accentColor,
    "--calendar-event-bg": C.eventDefaultColor,
    "--calendar-event-text": C.eventDefaultTextColor
  }), [C]), re = le.clone().startOf("month"), ye = le.clone().endOf("month"), ie = re.clone().startOf("week"), ae = ye.clone().endOf("week"), L = b(() => {
    const g = [];
    let H = ie.clone();
    for (; H.isBefore(ae) || H.isSame(ae, "day"); )
      g.push(H.clone()), H.add(1, "day");
    return g;
  }, [ie, ae]), X = () => I((g) => g.clone().subtract(1, "month")), De = () => I((g) => g.clone().add(1, "month")), z = () => $(u.utc().tz(c)), xe = /* @__PURE__ */ a("div", { className: "text-center flex flex-col items-center", children: [
    /* @__PURE__ */ e("h2", { className: "text-xl font-semibold", style: { color: "var(--calendar-text)" }, children: Z.format(D) }),
    /* @__PURE__ */ e("button", { onClick: z, className: "mt-1 text-sm font-medium", style: { color: "var(--calendar-primary)" }, children: "Today" })
  ] }), G = /* @__PURE__ */ e("button", { onClick: () => $(Z.clone().subtract(1, "month")), className: "px-3 py-1 rounded hover:bg-gray-100 transition-colors", style: { color: "var(--calendar-text)" }, children: "◀" }), J = /* @__PURE__ */ e("button", { onClick: () => $(Z.clone().add(1, "month")), className: "px-3 py-1 rounded hover:bg-gray-100 transition-colors", style: { color: "var(--calendar-text)" }, children: "▶" }), te = /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
    G,
    J
  ] }), oe = A ? A({
    goToPreviousDay: () => $(Z.clone().subtract(1, "month")),
    goToNextDay: () => $(Z.clone().add(1, "month")),
    goToToday: z,
    dateNode: xe,
    prevNode: G,
    nextNode: J,
    defaultNav: te,
    currentDate: Z,
    timezone: c
  }) : null;
  return /* @__PURE__ */ a("div", { className: "flex flex-col h-full w-full no-scrollbar", style: { ...S, backgroundColor: "var(--calendar-bg)" }, children: [
    A ? oe : /* @__PURE__ */ a("div", { className: "sticky top-0 z-20 border-b px-6 py-4 flex items-center min-h-[80px]", style: { backgroundColor: "var(--calendar-bg)", borderColor: "var(--calendar-grid)" }, children: [
      x === "left" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center", children: te }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: xe }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      x === "center" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ a("div", { className: "flex-1 flex justify-center items-center gap-4", children: [
          G,
          xe,
          J
        ] }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      x === "right" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: xe }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center gap-4", children: te })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "flex flex-col md:flex-row flex-1 overflow-hidden border shadow-lg rounded-xl bg-white no-scrollbar m-4 mt-2", style: { borderColor: "var(--calendar-grid)" }, children: [
      /* @__PURE__ */ a(
        "div",
        {
          className: "w-full md:w-80 flex-shrink-0 border-r flex flex-col p-4 bg-white",
          style: { borderColor: "var(--calendar-grid)", backgroundColor: "var(--calendar-secondary-bg)" },
          children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: X,
                  className: "p-1 hover:bg-gray-100 rounded transition-colors",
                  style: { color: "var(--calendar-text)" },
                  children: "◀"
                }
              ),
              /* @__PURE__ */ e("div", { className: "font-semibold text-sm", style: { color: "var(--calendar-text)" }, children: le.format("MMMM YYYY") }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: De,
                  className: "p-1 hover:bg-gray-100 rounded transition-colors",
                  style: { color: "var(--calendar-text)" },
                  children: "▶"
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "grid grid-cols-7 mb-2", children: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((g) => /* @__PURE__ */ e("div", { className: "text-center text-[10px] font-bold uppercase", style: { color: "var(--calendar-secondary-text)" }, children: g }, g)) }),
            /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-1", children: L.map((g, H) => {
              const V = g.isSame(le, "month"), ve = g.isSame(Z, "day"), K = g.isSame(u().tz(c), "day");
              let Ne = "hover:bg-gray-200", Q = { color: "var(--calendar-text)" }, _ = {};
              return V || (Q = { color: "var(--calendar-secondary-text)", opacity: 0.5 }), ve ? (Ne = "", _ = { backgroundColor: "var(--calendar-primary)", color: "white" }, Q = { color: "white" }) : K && (_ = { border: "2px solid var(--calendar-primary)", fontWeight: "bold" }, Q = { color: "var(--calendar-primary)" }), /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => $(g),
                  className: `h-8 w-8 flex items-center justify-center rounded-full text-xs transition-colors ${Ne}`,
                  style: { ...Q, ..._ },
                  children: g.date()
                },
                H
              );
            }) })
          ]
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex-1 min-w-0 h-full overflow-hidden bg-white", children: /* @__PURE__ */ e(
        xr,
        {
          ...r,
          selectedDate: ne,
          onDateChange: $,
          events: Y,
          showTimeSlots: ee,
          onAddEvent: i,
          onEditEvent: N,
          onDeleteEvent: P,
          renderNavigation: () => /* @__PURE__ */ e(se, {}),
          showTodayBelow: !1,
          dateFormat: D,
          timeFormat: v
        }
      ) })
    ] })
  ] });
};
export {
  kr as Calendar,
  xr as DayView,
  Nr as MonthView,
  ge as PREDEFINED_CALENDAR_THEMES,
  gr as PREDEFINED_CONFLICT_TEMPLATES,
  U as SLOT_HEIGHT,
  Cr as WeekView,
  dr as calculateLayoutEvents,
  er as checkIsSlotEnabled,
  vr as detectConflicts,
  cr as generateTimeSlots,
  rr as getDayEvents,
  sr as getWorkingHoursRange,
  $e as normalizeDate
};
