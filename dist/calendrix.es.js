(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wider:.05em;--leading-relaxed:1.625;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing) * 0)}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.-top-\\[5px\\]{top:-5px}.top-0{top:calc(var(--spacing) * 0)}.top-1{top:calc(var(--spacing) * 1)}.top-1\\/2{top:50%}.top-\\[2px\\]{top:2px}.right-0{right:calc(var(--spacing) * 0)}.right-1{right:calc(var(--spacing) * 1)}.right-2{right:calc(var(--spacing) * 2)}.right-3{right:calc(var(--spacing) * 3)}.right-\\[2px\\]{right:2px}.right-\\[14px\\]{right:14px}.bottom-0{bottom:calc(var(--spacing) * 0)}.-left-1{left:calc(var(--spacing) * -1)}.left-0{left:calc(var(--spacing) * 0)}.left-1{left:calc(var(--spacing) * 1)}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}.z-\\[60\\]{z-index:60}.z-\\[70\\]{z-index:70}.m-4{margin:calc(var(--spacing) * 4)}.m-5{margin:calc(var(--spacing) * 5)}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-\\[4px\\]{margin-top:4px}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.ml-2{margin-left:calc(var(--spacing) * 2)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.grid{display:grid}.table{display:table}.h-2{height:calc(var(--spacing) * 2)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-10{height:calc(var(--spacing) * 10)}.h-12{height:calc(var(--spacing) * 12)}.h-24{height:calc(var(--spacing) * 24)}.h-32{height:calc(var(--spacing) * 32)}.h-\\[16px\\]{height:16px}.h-\\[20px\\]{height:20px}.h-\\[40px\\]{height:40px}.h-\\[128px\\]{height:128px}.h-full{height:100%}.h-screen{height:100vh}.max-h-48{max-height:calc(var(--spacing) * 48)}.max-h-60{max-height:calc(var(--spacing) * 60)}.max-h-\\[90vh\\]{max-height:90vh}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-\\[80px\\]{min-height:80px}.min-h-\\[120px\\]{min-height:120px}.min-h-\\[200px\\]{min-height:200px}.min-h-full{min-height:100%}.w-2{width:calc(var(--spacing) * 2)}.w-4{width:calc(var(--spacing) * 4)}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-24{width:calc(var(--spacing) * 24)}.w-64{width:calc(var(--spacing) * 64)}.w-96{width:calc(var(--spacing) * 96)}.w-\\[16px\\]{width:16px}.w-\\[20px\\]{width:20px}.w-\\[64px\\]{width:64px}.w-\\[450px\\]{width:450px}.w-full{width:100%}.min-w-0{min-width:calc(var(--spacing) * 0)}.min-w-\\[700px\\]{min-width:700px}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.-translate-y-1{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-ns-resize{cursor:ns-resize}.cursor-pointer{cursor:pointer}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-1{gap:calc(var(--spacing) * 1)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-\\[8px\\]{gap:8px}.gap-\\[16px\\]{gap:16px}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-\\[4px\\]{border-radius:4px}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t-2{border-top-style:var(--tw-border-style);border-top-width:2px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-dotted{--tw-border-style:dotted;border-style:dotted}.border-\\[\\#e5e7eb\\]{border-color:#e5e7eb}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.bg-black{background-color:var(--color-black)}.bg-black\\/60{background-color:#0009}@supports (color:color-mix(in lab,red,red)){.bg-black\\/60{background-color:color-mix(in oklab,var(--color-black) 60%,transparent)}}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-900\\/60{background-color:#10182899}@supports (color:color-mix(in lab,red,red)){.bg-gray-900\\/60{background-color:color-mix(in oklab,var(--color-gray-900) 60%,transparent)}}.bg-red-50{background-color:var(--color-red-50)}.bg-red-500{background-color:var(--color-red-500)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.p-1{padding:calc(var(--spacing) * 1)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[4px\\]{padding:4px}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.px-8{padding-inline:calc(var(--spacing) * 8)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-6{padding-block:calc(var(--spacing) * 6)}.pr-1{padding-right:calc(var(--spacing) * 1)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-10{padding-right:calc(var(--spacing) * 10)}.pr-12{padding-right:calc(var(--spacing) * 12)}.pr-\\[48px\\]{padding-right:48px}.pb-8{padding-bottom:calc(var(--spacing) * 8)}.text-center{text-align:center}.text-right{text-align:right}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.whitespace-pre-line{white-space:pre-line}.text-\\[\\#3b82f6\\]{color:#3b82f6}.text-\\[\\#9ca3af\\]{color:#9ca3af}.text-\\[\\#374151\\]{color:#374151}.text-blue-600{color:var(--color-blue-600)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.accent-\\[\\#3b82f6\\]{accent-color:#3b82f6}.accent-blue-600{accent-color:var(--color-blue-600)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.opacity-80{opacity:.8}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[1px_0_5px_rgba\\(0\\,0\\,0\\,0\\.02\\)\\]{--tw-shadow:1px 0 5px var(--tw-shadow-color,#00000005);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.outline-none{--tw-outline-style:none;outline-style:none}.last\\:mb-0:last-child{margin-bottom:calc(var(--spacing) * 0)}.last\\:border-0:last-child{border-style:var(--tw-border-style);border-width:0}@media(hover:hover){.hover\\:z-20:hover{z-index:20}.hover\\:scale-\\[1\\.01\\]:hover{scale:1.01}.hover\\:scale-\\[1\\.02\\]:hover{scale:1.02}.hover\\:bg-blue-50:hover{background-color:var(--color-blue-50)}.hover\\:bg-blue-100:hover{background-color:var(--color-blue-100)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-red-50:hover{background-color:var(--color-red-50)}.hover\\:bg-red-600:hover{background-color:var(--color-red-600)}.hover\\:text-\\[\\#3b82f6\\]:hover{color:#3b82f6}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:text-red-700:hover{color:var(--color-red-700)}.hover\\:opacity-70:hover{opacity:.7}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:ring-\\[\\#3b82f6\\]:focus{--tw-ring-color:#3b82f6}@media(min-width:48rem){.md\\:w-80{width:calc(var(--spacing) * 80)}.md\\:flex-row{flex-direction:row}}}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes scaleIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.animate-fadeIn{animation:.3s forwards fadeIn}.animate-scaleIn{animation:.3s forwards scaleIn}.calendrix-input-hardened{color:#374151!important;background-color:#f9fafb80!important;border:1px solid #e5e7eb!important;border-radius:8px!important;outline:none!important;width:100%!important;padding:20px!important;transition:all .15s cubic-bezier(.4,0,.2,1)!important}.calendrix-input-hardened:focus{background-color:#fff!important;border-color:#3b82f6!important;box-shadow:0 0 0 2px #3b82f6!important}.calendrix-label-hardened{color:#374151!important;margin-bottom:4px!important;font-size:.875rem!important;font-weight:500!important;display:block!important}.calendrix-field-container{margin-bottom:16px!important}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}')),document.head.appendChild(t)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { jsxs as a, jsx as e, Fragment as se } from "react/jsx-runtime";
import { useState as B, useMemo as b, useRef as Fe, useEffect as Le, useLayoutEffect as lt } from "react";
import f from "moment-timezone";
const Z = 64, $e = (t, d) => f.utc(t).tz(d), ut = ["HH:mm", "hh:mm A", "h:mm a", "H:mm", "h:mmA", "h:mma", "hh:mm a", "HH:mm:ss"], at = (t) => f(t, ut, !0), We = (t) => {
  const d = at(t);
  return d.isValid() ? d.hours() * 60 + d.minutes() : 0;
}, st = (t) => {
  if (t?.length) {
    const d = t[0].start, l = t[t.length - 1].end;
    return {
      startMinutes: We(d),
      endMinutes: We(l)
    };
  }
  return {
    startMinutes: 0,
    endMinutes: 1440
  };
}, ct = (t, d) => {
  const l = [], o = t.clone().startOf("day");
  for (let n = 0; n < 1440; n += d)
    l.push(o.clone().add(n, "minutes"));
  return l;
}, et = (t, d, l, o, n) => {
  const k = t.format("HH:mm"), u = (m) => m.some((h) => {
    const g = at(h);
    return g.isValid() && g.format("HH:mm") === k;
  });
  if (d?.length)
    return u(d);
  if (l?.length && u(l))
    return !1;
  const i = (m, h = !1) => {
    if (!m?.length) return !!h;
    const g = t.hours() * 60 + t.minutes(), A = m.some((T) => {
      const v = We(T.start), te = We(T.end);
      return g >= v && g < te;
    });
    return h ? !A : A;
  };
  return o?.length ? i(o) : n?.length ? i(n, !0) : !0;
}, tt = (t, d, l) => {
  const o = [];
  return t.forEach((n) => {
    const k = $e(n.start, l), u = $e(n.end, l);
    if (n.allDay) {
      k.isSame(d, "day") && o.push({ ...n, start: k, end: u, allDay: !0 });
      return;
    }
    let i = k.clone().startOf("day");
    for (; i.isBefore(u); ) {
      const m = i.clone(), h = i.clone().endOf("day"), g = f.max(k, m), A = f.min(u, h);
      g.isSame(d, "day") && o.push({
        ...n,
        start: g,
        end: A
      }), i.add(1, "day");
    }
  }), o;
}, dt = (t, d, l) => {
  const o = [...t].sort(
    (u, i) => u.start.valueOf() - i.start.valueOf()
  ), n = [];
  o.forEach((u) => {
    let i = !1;
    for (const m of n) {
      const h = m[m.length - 1];
      if (u.start.isSameOrAfter(h.end)) {
        m.push(u), i = !0;
        break;
      }
    }
    i || n.push([u]);
  });
  const k = n.length;
  return o.map((u) => {
    let i = 0;
    n.forEach((T, v) => {
      T.includes(u) && (i = v);
    });
    const m = u.start, h = u.end, g = m.diff(d.clone().startOf("day"), "minutes") / l * Z, A = h.diff(m, "minutes") / l * Z;
    return {
      ...u,
      columnIndex: i,
      columnCount: k,
      top: g,
      height: A
    };
  });
}, vt = (t, d) => {
  if (console.log("[detectConflicts] Checking events count:", t.length, "Timezone:", d), console.log("[detectConflicts] Events data:", t.map((n) => ({ id: n.id, title: n.title, start: n.start, end: n.end }))), t.length < 2) return [];
  const l = [], o = t.map((n) => ({
    ...n,
    _mStart: f.tz(n.start, d),
    _mEnd: f.tz(n.end, d)
  })).filter((n) => n._mStart.isValid() && n._mEnd.isValid());
  o.sort((n, k) => n._mStart.diff(k._mStart));
  for (let n = 0; n < o.length; n++)
    for (let k = n + 1; k < o.length; k++) {
      const u = o[n], i = o[k];
      if (u._mStart.isBefore(i._mEnd) && u._mEnd.isAfter(i._mStart)) {
        const m = f.max(u._mStart, i._mStart), h = f.min(u._mEnd, i._mEnd);
        l.push({
          eventId: u.id,
          withId: i.id,
          eventTitle: u.title,
          withTitle: i.title,
          overlapStart: m.toISOString(),
          overlapEnd: h.toISOString()
        }), l.push({
          eventId: i.id,
          withId: u.id,
          eventTitle: i.title,
          withTitle: u.title,
          overlapStart: m.toISOString(),
          overlapEnd: h.toISOString()
        });
      }
    }
  return console.log("[detectConflicts] Conflicts found:", l.length), l;
};
class rt {
  plugins = [];
  context;
  constructor(d = [], l) {
    this.plugins = d, this.context = l;
  }
  setContext(d) {
    this.context = d;
  }
  init() {
    this.plugins.forEach((d) => {
      d.init && d.init(this.context);
    });
  }
  triggerBeforeRender() {
    this.plugins.forEach((d) => {
      d.hooks?.beforeRender && d.hooks.beforeRender(this.context);
    });
  }
  triggerOnEventRender(d, l) {
    this.plugins.forEach((o) => {
      o.hooks?.onEventRender && o.hooks.onEventRender(d, l);
    });
  }
  triggerOnEventClick(d) {
    this.plugins.forEach((l) => {
      l.hooks?.onEventClick && l.hooks.onEventClick(d);
    });
  }
  triggerAfterRender() {
    this.plugins.forEach((d) => {
      d.hooks?.afterRender && d.hooks.afterRender(this.context);
    });
  }
  triggerOnEventChange(d) {
    this.plugins.forEach((l) => {
      l.hooks?.onEventChange && l.hooks.onEventChange(d);
    });
  }
  triggerValidateSave(d) {
    const l = [];
    return this.plugins.forEach((o) => {
      if (o.hooks?.validateSave) {
        const n = o.hooks.validateSave(d, this.context);
        n && l.push(n);
      }
    }), l;
  }
}
const mt = ({ onChange: t, timeFormat: d, slotInterval: l, timezone: o, enabledTimeSlots: n, disabledTimeSlots: k, enabledTimeInterval: u, disableTimeInterval: i, checkIsSlotEnabled: m }) => {
  const h = b(() => {
    const g = [], A = f.tz(o).startOf("day");
    for (let T = 0; T < 1440; T += l)
      g.push(A.clone().add(T, "minutes"));
    return g;
  }, [l, o]);
  return /* @__PURE__ */ e("div", { className: "absolute z-[70] bg-white border rounded shadow-xl mt-1 max-h-48 overflow-y-auto w-full no-scrollbar", children: h.map((g, A) => {
    const T = m(g, n, k, u, i);
    return /* @__PURE__ */ e(
      "div",
      {
        onClick: () => {
          T && t(g.format(d));
        },
        className: `px-3 py-2 text-sm border-b last:border-0 ${T ? "hover:bg-blue-50 cursor-pointer text-gray-800" : "bg-gray-50 text-gray-300 cursor-not-allowed"}`,
        children: g.format(d)
      },
      A
    );
  }) });
}, ht = ({ value: t, onChange: d, dateFormat: l, timezone: o }) => {
  const [n, k] = B(() => f.tz(t, l, o).isValid() ? f.tz(t, l, o) : f.tz(o)), u = b(() => {
    const i = n.clone().startOf("month").startOf("week"), m = n.clone().endOf("month").endOf("week"), h = [];
    let g = i.clone();
    for (; g.isBefore(m); )
      h.push(g.clone()), g.add(1, "day");
    return h;
  }, [n]);
  return /* @__PURE__ */ a("div", { className: "absolute z-[70] bg-white border rounded shadow-xl mt-1 p-3 w-64 animate-fadeIn", children: [
    /* @__PURE__ */ a("div", { className: "flex justify-between items-center mb-2", children: [
      /* @__PURE__ */ e("button", { onClick: () => k(n.clone().subtract(1, "month")), className: "p-1 hover:bg-gray-100 rounded", children: "←" }),
      /* @__PURE__ */ e("span", { className: "font-semibold", children: n.format("MMMM YYYY") }),
      /* @__PURE__ */ e("button", { onClick: () => k(n.clone().add(1, "month")), className: "p-1 hover:bg-gray-100 rounded", children: "→" })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-1 text-center text-xs mb-1 font-bold text-gray-500", children: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((i) => /* @__PURE__ */ e("div", { children: i }, i)) }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-1", children: u.map((i, m) => /* @__PURE__ */ e(
      "div",
      {
        onClick: () => d(i.format(l)),
        className: `p-1.5 text-xs rounded cursor-pointer transition-colors ${i.isSame(n, "month") ? "hover:bg-blue-100" : "text-gray-300"} ${t === i.format(l) ? "bg-blue-600 text-white" : ""}`,
        children: i.date()
      },
      m
    )) })
  ] });
}, ot = ({
  isOpen: t,
  onClose: d,
  editingEvent: l,
  formData: o,
  setFormData: n,
  formFields: k,
  timezone: u,
  dateFormat: i = "YYYY-MM-DD",
  timeFormat: m = "HH:mm",
  onAddEvent: h,
  onEditEvent: g,
  onDeleteEvent: A,
  pluginManager: T,
  conflictTemplate: v,
  slotInterval: te = 30,
  enabledTimeSlots: fe,
  disabledTimeSlots: ce,
  enabledTimeInterval: ne,
  disableTimeInterval: X
}) => {
  const [le, P] = B([]), [$, I] = B(null);
  return t ? /* @__PURE__ */ a("div", { className: "fixed inset-0 bg-gray-900/60 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn", children: [
    /* @__PURE__ */ a("div", { className: "bg-white rounded-2xl p-8 w-[450px] shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto transform animate-scaleIn", children: [
      /* @__PURE__ */ a("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-gray-800", children: l ? "Edit Event" : "Create Event" }),
        /* @__PURE__ */ e("button", { onClick: d, className: "text-gray-400 hover:text-gray-600 transition-colors", children: /* @__PURE__ */ e("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) }) })
      ] }),
      k?.map((r) => /* @__PURE__ */ a("div", { className: "calendrix-field-container", children: [
        /* @__PURE__ */ e("label", { className: "calendrix-label-hardened", children: r.label }),
        (() => {
          switch (r.type) {
            case "textarea":
              return /* @__PURE__ */ e("textarea", { required: r.required, value: o[r.name] || "", onChange: (s) => n({ ...o, [r.name]: s.target.value }), className: "calendrix-input-hardened", rows: 3 });
            case "dropdown":
            case "singleSelect":
              return /* @__PURE__ */ a("select", { required: r.required, value: o[r.name] || "", onChange: (s) => n({ ...o, [r.name]: s.target.value }), className: "calendrix-input-hardened", children: [
                /* @__PURE__ */ e("option", { value: "", children: "Select..." }),
                r.options?.map((s) => /* @__PURE__ */ e("option", { value: s.value, children: s.label }, s.value))
              ] });
            case "multiselect":
              return /* @__PURE__ */ e("select", { multiple: !0, required: r.required, value: o[r.name] || [], onChange: (s) => {
                const E = Array.from(s.target.selectedOptions, (C) => C.value);
                n({ ...o, [r.name]: E });
              }, className: "calendrix-input-hardened h-[128px]", children: r.options?.map((s) => /* @__PURE__ */ e("option", { value: s.value, children: s.label }, s.value)) });
            case "radio":
              return /* @__PURE__ */ e("div", { className: "flex gap-[16px] mt-[4px]", children: r.options?.map((s) => /* @__PURE__ */ a("label", { className: "flex items-center gap-[8px] cursor-pointer text-[#374151]", children: [
                /* @__PURE__ */ e("input", { type: "radio", name: r.name, value: s.value, checked: o[r.name] === s.value, onChange: (E) => n({ ...o, [r.name]: E.target.value }), className: "w-[16px] h-[16px] text-[#3b82f6] focus:ring-[#3b82f6]" }),
                s.label
              ] }, s.value)) });
            case "boolean":
              return /* @__PURE__ */ e("input", { type: "checkbox", checked: !!o[r.name], onChange: (s) => n({ ...o, [r.name]: s.target.checked }), className: "w-[20px] h-[20px] mt-[4px] cursor-pointer accent-[#3b82f6] rounded" });
            case "attachment":
              return /* @__PURE__ */ e("input", { type: "file", required: r.required, onChange: (s) => {
                s.target.files && s.target.files.length > 0 && n({ ...o, [r.name]: s.target.files[0].name });
              }, className: "calendrix-input-hardened" });
            case "colorPicker":
              return /* @__PURE__ */ e("input", { type: "color", required: r.required, value: o[r.name] || "#000000", onChange: (s) => n({ ...o, [r.name]: s.target.value }), className: "w-[64px] h-[40px] p-[4px] border border-[#e5e7eb] rounded-lg cursor-pointer bg-white" });
            case "year":
              return /* @__PURE__ */ e("input", { type: "number", required: r.required, placeholder: "YYYY", value: o[r.name] || "", onChange: (s) => n({ ...o, [r.name]: s.target.value }), className: "calendrix-input-hardened" });
            case "day":
              return /* @__PURE__ */ e("input", { type: "number", required: r.required, min: "1", max: "31", placeholder: "DD", value: o[r.name] || "", onChange: (s) => n({ ...o, [r.name]: s.target.value }), className: "calendrix-input-hardened" });
            default:
              const w = !!((r.type === "datetime-local" || r.type === "datetime" || r.type === "date" || r.type === "time") && (i || m)), R = (() => {
                const s = o[r.name];
                if (!s || !w) return s || "";
                const E = f.tz(s, u);
                return E.isValid() ? r.type === "datetime-local" || r.type === "datetime" ? E.format(`${i || "YYYY-MM-DD"} ${m || "HH:mm"}`) : r.type === "date" ? E.format(i || "YYYY-MM-DD") : r.type === "time" ? E.format(m || "HH:mm") : s : s || "";
              })();
              return /* @__PURE__ */ a("div", { className: "relative", children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: w ? "text" : r.type,
                    required: r.required,
                    placeholder: r.type === "datetime-local" || r.type === "datetime" ? `${i || "YYYY-MM-DD"} ${m || "HH:mm"}` : r.type === "date" ? i || "YYYY-MM-DD" : r.type === "time" ? m || "HH:mm" : "",
                    value: R,
                    onChange: (s) => n({ ...o, [r.name]: s.target.value }),
                    onClick: () => {
                      w && I({ name: r.name, type: r.type === "time" ? "time" : "date" });
                    },
                    className: `calendrix-input-hardened ${w ? "pr-[48px]" : ""}`,
                    readOnly: w
                  }
                ),
                w && /* @__PURE__ */ e(
                  "div",
                  {
                    className: "absolute right-[14px] top-1/2 -translate-y-1/2 cursor-pointer text-[#9ca3af] hover:text-[#3b82f6] transition-colors z-10",
                    onClick: () => {
                      I({ name: r.name, type: r.type === "time" ? "time" : "date" });
                    },
                    children: /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                      /* @__PURE__ */ e("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
                      /* @__PURE__ */ e("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
                      /* @__PURE__ */ e("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
                    ] })
                  }
                ),
                w && $?.name === r.name && $.type === "date" && /* @__PURE__ */ a(se, { children: [
                  /* @__PURE__ */ e("div", { className: "fixed inset-0 z-[60]", onClick: () => I(null) }),
                  /* @__PURE__ */ e(
                    ht,
                    {
                      value: o[r.name] ? f.tz(o[r.name], `${i || "YYYY-MM-DD"} ${m || "HH:mm"}`, u).format(i || "YYYY-MM-DD") : "",
                      onChange: (s) => {
                        let E = s;
                        if (r.type === "datetime-local" || r.type === "datetime") {
                          const C = o[r.name], Y = f.tz(C, `${i || "YYYY-MM-DD"} ${m || "HH:mm"}`, u), L = Y.isValid() ? Y.format(m || "HH:mm") : f().format(m || "HH:mm");
                          E = `${s} ${L}`, I({ name: r.name, type: "time" });
                        } else
                          I(null);
                        n({ ...o, [r.name]: E });
                      },
                      dateFormat: i || "YYYY-MM-DD",
                      timezone: u
                    }
                  )
                ] }),
                w && $?.name === r.name && $.type === "time" && /* @__PURE__ */ a(se, { children: [
                  /* @__PURE__ */ e("div", { className: "fixed inset-0 z-[60]", onClick: () => I(null) }),
                  /* @__PURE__ */ e(
                    mt,
                    {
                      value: o[r.name] ? f.tz(o[r.name], `${i || "YYYY-MM-DD"} ${m || "HH:mm"}`, u).format(m || "HH:mm") : "",
                      onChange: (s) => {
                        let E = s;
                        if (r.type === "datetime-local" || r.type === "datetime") {
                          const C = o[r.name], Y = f.tz(C, `${i || "YYYY-MM-DD"} ${m || "HH:mm"}`, u);
                          E = `${Y.isValid() ? Y.format(i || "YYYY-MM-DD") : f().format(i || "YYYY-MM-DD")} ${s}`;
                        }
                        n({ ...o, [r.name]: E }), I(null);
                      },
                      timeFormat: m || "HH:mm",
                      slotInterval: te,
                      timezone: u,
                      enabledTimeSlots: fe,
                      disabledTimeSlots: ce,
                      enabledTimeInterval: ne,
                      disableTimeInterval: X,
                      checkIsSlotEnabled: et
                    }
                  )
                ] })
              ] });
          }
        })()
      ] }, r.name)),
      /* @__PURE__ */ a("div", { className: "flex justify-between mt-4", children: [
        l && A && /* @__PURE__ */ e(
          "button",
          {
            onClick: () => {
              A(l.id), d();
            },
            className: "text-red-500 hover:text-red-700 text-sm font-medium transition-colors",
            children: "Delete Event"
          }
        ),
        /* @__PURE__ */ a("div", { className: "flex gap-2 ml-auto", children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: d,
              className: "px-5 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600 font-medium",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => {
                try {
                  const r = (s) => {
                    if (console.log("[EventFormModal] parseInTimezone input:", s), !s) return f().utc().toISOString();
                    if (s.includes("T") && (s.includes("Z") || s.split(":").length > 2)) {
                      const C = f(s).toISOString();
                      return console.log("[EventFormModal] recognized ISO:", C), C;
                    }
                    if (i && m) {
                      const C = f.tz(s, `${i} ${m}`, u);
                      if (C.isValid()) {
                        const Y = C.toISOString();
                        return console.log("[EventFormModal] parsed via custom format:", Y), Y;
                      }
                    }
                    const E = f.tz(s, "YYYY-MM-DDTHH:mm", u);
                    if (E.isValid()) {
                      const C = E.toISOString();
                      return console.log("[EventFormModal] parsed via fallback format:", C), C;
                    }
                    return console.warn("[EventFormModal] failed to parse date, returning current time as fallback"), f().utc().toISOString();
                  }, w = {
                    ...o,
                    start: o.start ? r(o.start) : o.start,
                    end: o.end ? r(o.end) : o.end
                  };
                  console.log("[EventFormModal] finalData:", w);
                  const R = T.triggerValidateSave(w);
                  if (R.length > 0) {
                    P(R);
                    return;
                  }
                  if (l) {
                    const s = {
                      ...l,
                      ...w
                    };
                    g?.(s), T.triggerOnEventChange(s);
                  } else {
                    const s = {
                      id: Date.now().toString(),
                      ...w
                    };
                    h?.(s);
                  }
                  d();
                } catch (r) {
                  console.error("[EventFormModal] Save Error:", r), alert("SAVE ERROR: " + r.message);
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
          /* @__PURE__ */ e("div", { className: "bg-gray-50 rounded-xl p-4 mb-6 max-h-60 overflow-y-auto border border-gray-100", style: { backgroundColor: v?.theme?.backgroundColor === "#fff" ? "#f9fafb" : v?.theme?.backgroundColor }, children: v?.renderDetails ? v.renderDetails(le) : le.map((r, w) => /* @__PURE__ */ e("div", { className: "mb-3 last:mb-0", children: /* @__PURE__ */ e("div", { className: "text-sm font-medium text-gray-800 whitespace-pre-line leading-relaxed", style: { color: v?.theme?.textColor || "#1f2937" }, children: r }) }, w)) }),
          v?.renderFooter ? v.renderFooter(() => P([]), v.theme || { primaryColor: "#dc2626", secondaryColor: "#ef4444", backgroundColor: "#fff", textColor: "#1f2937", borderColor: "#fee2e2" }) : /* @__PURE__ */ e("div", { className: "flex gap-3", children: /* @__PURE__ */ e(
            "button",
            {
              onClick: () => P([]),
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
}, xt = {
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
}, xe = {
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
}, gt = ({
  timezone: t = f.tz.guess() || "UTC",
  timezoneLabelInclude: d = !1,
  slotInterval: l = 30,
  dateFormat: o = "YYYY-MM-DD",
  timeFormat: n = "HH:mm",
  showTimeSlots: k = !0,
  selectedDate: u,
  onDateChange: i,
  events: m,
  onEventChange: h,
  navigationPosition: g = "center",
  showTodayBelow: A = !0,
  renderNavigation: T,
  showEmptyState: v = !0,
  enabledTimeSlots: te,
  disabledTimeSlots: fe,
  enabledTimeInterval: ce,
  disableTimeInterval: ne,
  emptyStateContent: X,
  emptyStateContentPopup: le,
  futureDaysOnly: P,
  pastDaysOnly: $,
  currentDayOnly: I,
  navigateToFirstEvent: r,
  onAddEvent: w,
  onEditEvent: R,
  onDeleteEvent: s,
  formFields: E,
  onlyCreateEditRequired: C = !0,
  plugins: Y,
  conflictTemplate: L,
  conflictThemeVariant: ye,
  calendarTheme: ie,
  calendarThemeVariant: ae
}) => {
  const V = Fe(null), J = Fe(null), [De, z] = B(() => f.tz(u || /* @__PURE__ */ new Date(), t)), ge = u !== void 0 ? u : De, G = (c) => {
    i ? i(c) : z(c);
  }, [K, re] = B(() => m || []), oe = m !== void 0 ? m : K, x = w || ((c) => re((p) => [...p, c])), H = R || ((c) => re((p) => p.map((D) => D.id === c.id ? c : D))), W = s || ((c) => re((p) => p.filter((D) => D.id !== c))), ve = E || [
    { name: "title", label: "Event Title", type: "text", required: !0 },
    { name: "description", label: "Description", type: "textarea" },
    { name: "start", label: "Start Time", type: "datetime-local", required: !0 },
    { name: "end", label: "End Time", type: "datetime-local", required: !0 }
  ], Q = b(() => ie || (ae && xe[ae] ? xe[ae] : xe.classic_light), [ie, ae]), Ne = b(() => ({
    "--calendar-primary": Q.primaryColor,
    "--calendar-bg": Q.backgroundColor,
    "--calendar-secondary-bg": Q.secondaryBackgroundColor,
    "--calendar-grid": Q.gridColor,
    "--calendar-text": Q.textColor,
    "--calendar-secondary-text": Q.secondaryTextColor,
    "--calendar-accent": Q.accentColor,
    "--calendar-event-bg": Q.eventDefaultColor,
    "--calendar-event-text": Q.eventDefaultTextColor
  }), [Q]), F = b(() => oe ?? [], [oe]), _ = b(() => new rt(Y, {
    timezone: t,
    slotInterval: l,
    events: F,
    onEventChange: h,
    onAddEvent: x,
    onEditEvent: H,
    onDeleteEvent: W
  }), [Y, t, l, F, h, x, H, W]);
  Le(() => {
    _.init();
  }, [_]);
  const N = b(
    () => $e(ge, t),
    [ge, t]
  ), pe = b(() => f.utc().tz(t), [t]), Ye = N.isSame(pe, "day"), [S, q] = B(!1), [de, ue] = B(null), [ke, O] = B({}), me = P && $, _e = !me && P && N.isBefore(f().tz(t), "day") || I && N.isBefore(f().tz(t), "day"), Ae = !me && $ && N.isAfter(f().tz(t), "day") || I && N.isAfter(f().tz(t), "day"), Re = _e || Ae || I && !Ye, y = b(
    () => st(ce),
    [ce]
  ), M = () => {
    q(!1), ue(null), O({});
  }, ee = b(
    () => tt(F, N, t),
    [F, N, t]
  ).filter((c) => !c.allDay), j = b(() => {
    _.triggerBeforeRender();
    const c = dt(ee, N, l);
    return _.triggerAfterRender(), c;
  }, [ee, N, l, _]), he = !I && (me || !(P && N.isSameOrBefore(pe, "day"))), Se = !I && (me || !($ && N.isSameOrAfter(pe, "day"))), He = () => {
    he && G(N.clone().subtract(1, "day"));
  }, Be = () => {
    Se && G(N.clone().add(1, "day"));
  }, qe = () => G(f.utc().tz(t)), [Ee, Me] = B(null), [Oe, nt] = B(null), Ue = (c) => Math.round(c / l) * l;
  Le(() => {
    const c = (D) => {
      if (!J.current) return;
      const be = J.current.getBoundingClientRect(), je = (D.clientY - be.top) / Z * l;
      if (Ee) {
        const we = Ue(je), Ce = N.clone().startOf("day").add(we, "minutes"), Te = Ee.end.diff(
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
        const we = Ue(je), Ce = N.clone().startOf("day").add(we, "minutes");
        if (Ce.isAfter(Oe.start)) {
          const Te = {
            ...Oe,
            end: Ce
          };
          h?.(Te), _.triggerOnEventChange(Te);
        }
      }
    }, p = () => {
      Me(null), nt(null);
    };
    return window.addEventListener("mousemove", c), window.addEventListener("mouseup", p), () => {
      window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", p);
    };
  }, [Ee, Oe, N, l, h]);
  const Ze = (c, p) => {
    let D;
    if (p)
      D = p.clone();
    else if (J.current) {
      const Ge = J.current.getBoundingClientRect(), we = (c.clientY - Ge.top) / Z * l, Ce = Ue(we);
      D = N.clone().startOf("day").add(Ce, "minutes");
    } else
      return;
    if (!Ve(D)) return;
    const be = D.clone().add(l, "minutes");
    ue(null), O({
      start: D.format(`${o || "YYYY-MM-DD"} ${n || "HH:mm"}`),
      end: be.format(`${o || "YYYY-MM-DD"} ${n || "HH:mm"}`)
    }), q(!0);
  }, Xe = b(
    () => ct(N, l),
    [N, l]
  ), Ve = (c) => et(
    c,
    te,
    fe,
    ce,
    ne
  );
  lt(() => {
    V.current && (V.current.scrollTop = 0);
  }, [N, r]), Le(() => {
    if (!V.current || !r) return;
    const c = setTimeout(() => {
      V.current && requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!V.current) return;
          let p = 0;
          if (j.length > 0)
            p = j[0].top;
          else {
            const D = Xe.findIndex((be) => Ve(be));
            D !== -1 && (p = D * Z);
          }
          if (p > 0) {
            const D = Math.max(0, p - Z), be = V.current.scrollTop, Ge = D - be, je = 2e3;
            let we = null;
            const Ce = (Te) => {
              we === null && (we = Te);
              const Ie = Te - we, Pe = Ie / je, ft = Pe < 0.5 ? 4 * Pe * Pe * Pe : 1 - Math.pow(-2 * Pe + 2, 3) / 2;
              V.current && (V.current.scrollTop = be + Ge * ft, Ie < je ? requestAnimationFrame(Ce) : V.current.scrollTop = D);
            };
            requestAnimationFrame(Ce);
          }
        });
      });
    }, 100);
    return () => clearTimeout(c);
  }, [N, j.length, r]);
  const ze = /* @__PURE__ */ a("div", { className: "text-center flex flex-col items-center", children: [
    /* @__PURE__ */ e("h2", { className: "text-xl font-semibold px-4 py-1 rounded-full text-white", style: Ye ? { backgroundColor: "var(--calendar-primary)" } : { color: "var(--calendar-text)" }, children: N.format(o) }),
    d && /* @__PURE__ */ a("p", { className: "text-xs text-gray-500 mt-1", children: [
      "GMT",
      N.format("Z"),
      " • ",
      t
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
  ] }), it = T ? T({
    goToPreviousDay: He,
    goToNextDay: Be,
    goToToday: qe,
    dateNode: ze,
    prevNode: Je,
    nextNode: Ke,
    defaultNav: Qe,
    currentDate: N,
    timezone: t
  }) : null;
  return /* @__PURE__ */ a("div", { className: "flex flex-col flex-1 h-full w-full min-h-0 no-scrollbar", style: { ...Ne, backgroundColor: "var(--calendar-bg)", color: "var(--calendar-text)" }, children: [
    T != null ? /* @__PURE__ */ e("div", { children: it }, "custom-nav-wrapper") : /* @__PURE__ */ a("div", { className: "sticky top-0 z-20 border-b px-6 py-4 flex items-center min-h-[80px]", style: { backgroundColor: "var(--calendar-bg)", borderColor: "var(--calendar-grid)" }, children: [
      g === "left" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center", children: Qe }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: ze }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      g === "center" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ a("div", { className: "flex-1 flex justify-center items-center gap-4", children: [
          Je,
          ze,
          Ke
        ] }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      g === "right" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: ze }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center gap-4", children: Qe })
      ] })
    ] }),
    k === !1 ? /* @__PURE__ */ a("div", { className: "flex flex-col flex-1 min-h-0 m-5 p-4 overflow-y-auto no-scrollbar relative", children: [
      C && /* @__PURE__ */ e("div", { className: "flex justify-end mb-4", children: /* @__PURE__ */ e(
        "button",
        {
          onClick: () => {
            ue(null);
            const c = N.clone().hour(9).minute(0), p = c.clone().add(l, "minutes");
            O({
              start: c.format("YYYY-MM-DDTHH:mm"),
              end: p.format("YYYY-MM-DDTHH:mm")
            }), q(!0);
          },
          className: "px-4 py-2 text-sm text-white rounded shadow transition-colors",
          style: { backgroundColor: "var(--calendar-primary)" },
          children: "+ Add Event"
        }
      ) }),
      ee.length === 0 ? /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center flex-1 h-full min-h-[200px] border-2 border-dashed rounded-xl", style: { borderColor: "var(--calendar-grid)" }, children: /* @__PURE__ */ e("p", { className: "text-gray-500 font-medium mb-4", children: X || "No events scheduled" }) }) : /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 pb-8", children: ee.sort((c, p) => f(c.start).diff(f(p.start))).map((c) => /* @__PURE__ */ a(
        "div",
        {
          onClick: (p) => {
            p.stopPropagation(), _.triggerOnEventClick(c), C && (ue(c), O({
              ...c,
              start: f(c.start).tz(t).format("YYYY-MM-DDTHH:mm"),
              end: f(c.end).tz(t).format("YYYY-MM-DDTHH:mm")
            }), q(!0));
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
              /* @__PURE__ */ e("div", { className: "font-semibold text-base", children: c.title }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: (p) => {
                    p.stopPropagation(), W(c.id);
                  },
                  className: "text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors",
                  title: "Delete Event",
                  children: "✕"
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "text-sm opacity-80 mt-1", children: [
              f(c.start).tz(t).format(n),
              " - ",
              f(c.end).tz(t).format(n)
            ] })
          ]
        },
        c.id
      )) })
    ] }) : /* @__PURE__ */ e("div", { ref: V, className: "flex-1 overflow-y-auto no-scrollbar", children: /* @__PURE__ */ a("div", { className: "flex min-h-full", children: [
      /* @__PURE__ */ e("div", { className: "w-24 flex-shrink-0", style: { backgroundColor: "var(--calendar-secondary-bg)" }, children: Xe.map((c, p) => {
        const D = Ve(c);
        return /* @__PURE__ */ e(
          "div",
          {
            className: "relative text-xs text-right pr-3 border-b border-dotted border-r",
            style: {
              height: Z,
              borderColor: "var(--calendar-grid)",
              color: D ? "var(--calendar-secondary-text)" : "var(--calendar-grid)",
              cursor: D ? "pointer" : "not-allowed",
              backgroundColor: D ? "transparent" : "var(--calendar-secondary-bg)"
            },
            children: /* @__PURE__ */ e("span", { className: "absolute top-1/2 -translate-y-1/2 right-2", children: c.format(n) })
          },
          p
        );
      }) }),
      /* @__PURE__ */ a("div", { ref: J, className: "flex-1 relative", onDoubleClick: (c) => Ze(c), children: [
        Xe.map((c, p) => {
          const D = Ve(c);
          return /* @__PURE__ */ e(
            "div",
            {
              onDoubleClick: (be) => {
                be.stopPropagation(), D && Ze(be, c);
              },
              style: {
                height: Z,
                borderColor: "var(--calendar-grid)",
                cursor: D ? "pointer" : "not-allowed",
                backgroundColor: D ? "transparent" : "rgba(0,0,0,0.02)"
              },
              className: `border-b border-dotted transition-colors ${D ? "hover:bg-gray-50" : ""}`
            },
            p
          );
        }),
        j.map((c) => /* @__PURE__ */ a(
          "div",
          {
            ref: (p) => {
              p && _.triggerOnEventRender(c, p);
            },
            onMouseDown: () => Me(c),
            onDoubleClick: (p) => {
              p.stopPropagation(), _.triggerOnEventClick(c), H && (ue(c), O({
                ...c,
                start: f(c.start).tz(t).format(`${o || "YYYY-MM-DD"} ${n || "HH:mm"}`),
                end: f(c.end).tz(t).format(`${o || "YYYY-MM-DD"} ${n || "HH:mm"}`)
              }), q(!0));
            },
            className: "absolute rounded px-2 text-sm cursor-move z-10",
            style: {
              top: c.top,
              height: c.height,
              left: `${c.columnIndex / c.columnCount * 100}%`,
              width: `${100 / c.columnCount}%`,
              backgroundColor: "var(--calendar-event-bg)",
              color: "var(--calendar-event-text)"
            },
            children: [
              c.title,
              W && /* @__PURE__ */ e(
                "button",
                {
                  onClick: (p) => {
                    p.stopPropagation(), W(c.id);
                  },
                  className: "absolute top-1 right-1 text-xs bg-red-500 rounded px-1",
                  children: "✕"
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  onMouseDown: (p) => {
                    p.stopPropagation(), nt(c);
                  },
                  className: "absolute bottom-0 left-0 right-0 h-2 cursor-ns-resize",
                  style: { backgroundColor: "var(--calendar-primary)", opacity: 0.5 }
                }
              )
            ]
          },
          c.id
        )),
        v && j.length === 0 && !Re && /* @__PURE__ */ e(
          "div",
          {
            className: "absolute left-0 right-0 flex items-center justify-center animate-fadeIn",
            onDoubleClick: (c) => {
              Re || Ze(c);
            },
            style: {
              top: y.startMinutes / l * Z,
              height: (y.endMinutes - y.startMinutes) / l * Z,
              cursor: Re ? "not-allowed" : "pointer"
            },
            children: /* @__PURE__ */ a("div", { className: "bg-white shadow-xl rounded-2xl px-8 py-6 border text-center animate-scaleIn", children: [
              /* @__PURE__ */ e("p", { className: "text-gray-600 font-medium", children: X || "No events scheduled" }),
              le || /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    ue(null), O({}), q(!0);
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
              top: (pe.hours() * 60 + pe.minutes()) / l * Z
            }
          }
        )
      ] })
    ] }) }),
    C && /* @__PURE__ */ e(
      ot,
      {
        isOpen: S,
        onClose: M,
        editingEvent: de,
        formData: ke,
        setFormData: O,
        formFields: ve,
        timezone: t,
        dateFormat: o,
        timeFormat: n,
        onAddEvent: x,
        onEditEvent: H,
        onDeleteEvent: W,
        pluginManager: _,
        conflictTemplate: L || (ye ? xt[ye] : void 0),
        slotInterval: l,
        enabledTimeSlots: te,
        disabledTimeSlots: fe,
        enabledTimeInterval: ce,
        disableTimeInterval: ne,
        events: F
      }
    )
  ] });
}, Ct = ({
  timezone: t = f.tz.guess() || "UTC",
  timezoneLabelInclude: d = !1,
  slotInterval: l = 30,
  dateFormat: o = "YYYY-MM-DD",
  timeFormat: n = "HH:mm",
  selectedDate: k,
  onDateChange: u,
  events: i,
  onEventChange: m,
  navigationPosition: h = "center",
  renderNavigation: g,
  showEmptyState: A = !0,
  enabledTimeSlots: T,
  disabledTimeSlots: v,
  enabledTimeInterval: te,
  disableTimeInterval: fe,
  onAddEvent: ce,
  onEditEvent: ne,
  onDeleteEvent: X,
  formFields: le,
  onlyCreateEditRequired: P = !0,
  navigateToFirstEvent: $,
  plugins: I,
  calendarTheme: r,
  calendarThemeVariant: w
}) => {
  const R = Fe(null), [s, E] = B(() => f.tz(k || /* @__PURE__ */ new Date(), t)), C = k !== void 0 ? k : s, Y = (y) => {
    u ? u(y) : E(y);
  }, [L, ye] = B(() => i || []), ie = i !== void 0 ? i : L, ae = ce || ((y) => ye((M) => [...M, y])), V = ne || ((y) => ye((M) => M.map((U) => U.id === y.id ? y : U))), J = X || ((y) => ye((M) => M.filter((U) => U.id !== y))), De = le || [
    { name: "title", label: "Event Title", type: "text", required: !0 },
    { name: "description", label: "Description", type: "textarea" },
    { name: "start", label: "Start Time", type: "datetime-local", required: !0 },
    { name: "end", label: "End Time", type: "datetime-local", required: !0 }
  ], z = b(() => r || (w && xe[w] ? xe[w] : xe.classic_light), [r, w]), ge = b(() => ({
    "--calendar-primary": z.primaryColor,
    "--calendar-bg": z.backgroundColor,
    "--calendar-secondary-bg": z.secondaryBackgroundColor,
    "--calendar-grid": z.gridColor,
    "--calendar-text": z.textColor,
    "--calendar-secondary-text": z.secondaryTextColor,
    "--calendar-accent": z.accentColor,
    "--calendar-event-bg": z.eventDefaultColor,
    "--calendar-event-text": z.eventDefaultTextColor
  }), [z]), G = b(() => ie ?? [], [ie]), K = b(() => new rt(I, {
    timezone: t,
    slotInterval: l,
    events: G,
    onEventChange: m,
    onAddEvent: ae,
    onEditEvent: V,
    onDeleteEvent: J
  }), [I, t, l, G, m, ae, V, J]);
  Le(() => {
    K.init();
  }, [K]);
  const re = b(
    () => $e(C, t),
    [C, t]
  ), oe = b(() => re.clone().startOf("week"), [re]), x = b(() => {
    const y = [];
    for (let M = 0; M < 7; M++)
      y.push(oe.clone().add(M, "days"));
    return y;
  }, [oe]), H = b(() => f.utc().tz(t), [t]), [W, ve] = B(!1), [Q, Ne] = B(null), [F, _] = B({}), N = b(
    () => st(te),
    [te]
  ), pe = () => {
    ve(!1), Ne(null), _({});
  }, Ye = () => Y(re.clone().subtract(1, "week")), S = () => Y(re.clone().add(1, "week")), q = () => Y(f.utc().tz(t)), de = b(
    () => ct(oe, l),
    [oe, l]
  ), ue = (y) => et(
    y,
    T,
    v,
    te,
    fe
  ), ke = b(() => {
    K.triggerBeforeRender();
    const y = x.map((M) => {
      const U = tt(G, M, t).filter((ee) => !ee.allDay);
      return dt(U, M, l);
    });
    return K.triggerAfterRender(), y;
  }, [x, G, t, l, K]);
  lt(() => {
    R.current && (R.current.scrollTop = 0);
  }, [oe, $]), Le(() => {
    if (!R.current || !$) return;
    const y = setTimeout(() => {
      R.current && requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!R.current) return;
          let M = 1 / 0;
          ke.forEach((ee) => {
            ee.length > 0 && (M = Math.min(M, ee[0].top));
          });
          let U = 0;
          if (M !== 1 / 0)
            U = M;
          else {
            const ee = de.findIndex((j) => ue(j));
            ee !== -1 && (U = ee * Z);
          }
          if (U > 0) {
            const ee = Math.max(0, U - Z), j = R.current.scrollTop, he = ee - j, Se = 2e3;
            let He = null;
            const Be = (qe) => {
              He === null && (He = qe);
              const Ee = qe - He, Me = Ee / Se, Oe = Me < 0.5 ? 4 * Me * Me * Me : 1 - Math.pow(-2 * Me + 2, 3) / 2;
              R.current && (R.current.scrollTop = j + he * Oe, Ee < Se ? requestAnimationFrame(Be) : R.current.scrollTop = ee);
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
    d && /* @__PURE__ */ a("p", { className: "text-xs text-gray-500 mt-1", children: [
      "GMT",
      re.format("Z"),
      " • ",
      t
    ] }),
    /* @__PURE__ */ e("button", { onClick: q, className: "mt-1 text-sm font-medium", style: { color: "var(--calendar-primary)" }, children: "Today" })
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
      onClick: S,
      className: "px-3 py-1 rounded hover:bg-gray-200",
      children: "▶"
    }
  ), Ae = /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
    me,
    _e
  ] }), Re = g ? g({
    goToPreviousDay: Ye,
    goToNextDay: S,
    goToToday: q,
    dateNode: O,
    prevNode: me,
    nextNode: _e,
    defaultNav: Ae,
    currentDate: oe,
    timezone: t
  }) : null;
  return /* @__PURE__ */ a("div", { className: "flex flex-col flex-1 h-full w-full min-h-0 no-scrollbar", style: { ...ge, backgroundColor: "var(--calendar-bg)", color: "var(--calendar-text)" }, children: [
    g != null ? /* @__PURE__ */ e("div", { children: Re }, "custom-nav-wrapper") : /* @__PURE__ */ a("div", { className: "sticky top-0 z-20 border-b px-6 py-4 flex items-center min-h-[80px]", style: { backgroundColor: "var(--calendar-bg)", borderColor: "var(--calendar-grid)" }, children: [
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
        /* @__PURE__ */ e("div", { className: "flex flex-1 min-w-[700px]", children: x.map((y, M) => /* @__PURE__ */ a("div", { className: "flex-1 text-center font-medium py-3", style: { color: "var(--calendar-text)" }, children: [
          /* @__PURE__ */ e("div", { className: "text-xs uppercase tracking-wider", style: { color: "var(--calendar-secondary-text)" }, children: y.format("ddd") }),
          /* @__PURE__ */ e(
            "div",
            {
              className: `text-2xl mt-1 w-10 h-10 flex items-center justify-center mx-auto rounded-full ${y.isSame(H, "day") ? "text-white" : ""}`,
              style: y.isSame(H, "day") ? { backgroundColor: "var(--calendar-primary)" } : {},
              children: y.format("D")
            }
          )
        ] }, M)) })
      ] }),
      /* @__PURE__ */ e("div", { ref: R, className: "flex-1 overflow-y-auto overflow-x-hidden no-scrollbar relative", children: /* @__PURE__ */ a("div", { className: "flex min-h-full", children: [
        /* @__PURE__ */ e("div", { className: "w-24 flex-shrink-0 z-10 sticky left-0 shadow-[1px_0_5px_rgba(0,0,0,0.02)]", style: { backgroundColor: "var(--calendar-bg)" }, children: de.map((y, M) => {
          const U = ue(y);
          return /* @__PURE__ */ e(
            "div",
            {
              className: "relative text-xs text-right pr-3 border-b border-dotted",
              style: {
                height: Z,
                borderColor: "var(--calendar-grid)",
                color: U ? "var(--calendar-secondary-text)" : "var(--calendar-grid)",
                backgroundColor: U ? "transparent" : "var(--calendar-secondary-bg)"
              },
              children: /* @__PURE__ */ e("span", { className: "absolute top-1/2 -translate-y-1/2 right-2 px-1", style: { backgroundColor: "var(--calendar-bg)" }, children: y.format(n) })
            },
            M
          );
        }) }),
        /* @__PURE__ */ a("div", { className: "flex flex-1 relative min-w-[700px]", style: { backgroundColor: "var(--calendar-bg)" }, children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 pointer-events-none", children: de.map((y, M) => /* @__PURE__ */ e(
            "div",
            {
              style: { height: Z, borderColor: "var(--calendar-grid)" },
              className: "border-b border-dotted w-full"
            },
            `row-${M}`
          )) }),
          x.map((y, M) => {
            const U = ke[M], ee = y.isSame(H, "day");
            return /* @__PURE__ */ a("div", { className: "flex-1 relative", children: [
              /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0 bg-transparent cursor-pointer", onDoubleClick: () => {
                P && (_({ start: y.clone().hour(9).format(`${o || "YYYY-MM-DD"} ${n || "HH:mm"}`) }), ve(!0));
              } }),
              ee && /* @__PURE__ */ e(
                "div",
                {
                  className: "absolute left-0 right-0 border-t-2 z-10",
                  style: {
                    borderColor: "var(--calendar-primary)",
                    top: (H.hours() * 60 + H.minutes()) / l * Z,
                    boxShadow: "0 0 8px var(--calendar-primary-alpha40)"
                  },
                  children: /* @__PURE__ */ e("div", { className: "absolute -left-1 -top-[5px] w-2 h-2 rounded-full", style: { backgroundColor: "var(--calendar-primary)" } })
                }
              ),
              A && U.length === 0 && /* @__PURE__ */ e(
                "div",
                {
                  className: "absolute left-1 right-1 flex items-center justify-center animate-fadeIn opacity-50",
                  style: {
                    top: N.startMinutes / l * Z,
                    height: (N.endMinutes - N.startMinutes) / l * Z
                  },
                  children: /* @__PURE__ */ e("div", { className: "text-xs font-medium", style: { color: "var(--calendar-secondary-text)" }, children: "Clear" })
                }
              ),
              /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 pointer-events-none", children: U.map((j) => /* @__PURE__ */ a(
                "div",
                {
                  onDoubleClick: (he) => {
                    he.stopPropagation(), K.triggerOnEventClick(j), P && (Ne(j), _({
                      ...j,
                      start: f(j.start).tz(t).format(`${o || "YYYY-MM-DD"} ${n || "HH:mm"}`),
                      end: f(j.end).tz(t).format(`${o || "YYYY-MM-DD"} ${n || "HH:mm"}`)
                    }), ve(!0));
                  },
                  ref: (he) => {
                    he && K.triggerOnEventRender(j, he);
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
                    J && P && /* @__PURE__ */ e(
                      "button",
                      {
                        onClick: (he) => {
                          he.stopPropagation(), J(j.id);
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
      P && /* @__PURE__ */ e(
        ot,
        {
          isOpen: W,
          onClose: pe,
          editingEvent: Q,
          formData: F,
          setFormData: _,
          formFields: De,
          timezone: t,
          dateFormat: o,
          timeFormat: n,
          onAddEvent: ae,
          onEditEvent: V,
          onDeleteEvent: J,
          pluginManager: K,
          disableTimeInterval: fe,
          events: G
        }
      )
    ] })
  ] });
}, Nt = ({
  timezone: t = f.tz.guess() || "UTC",
  timezoneLabelInclude: d = !1,
  dateFormat: l = "MMMM YYYY",
  timeFormat: o = "HH:mm",
  selectedDate: n,
  onDateChange: k,
  events: u,
  onEventChange: i,
  navigationPosition: m = "center",
  renderNavigation: h,
  onAddEvent: g,
  onEditEvent: A,
  onDeleteEvent: T,
  formFields: v,
  onlyCreateEditRequired: te = !0,
  plugins: fe,
  calendarTheme: ce,
  calendarThemeVariant: ne
}) => {
  const [X, le] = B(() => f.tz(n || /* @__PURE__ */ new Date(), t)), P = n !== void 0 ? n : X, $ = (S) => {
    k ? k(S) : le(S);
  }, [I, r] = B(() => u || []), w = u !== void 0 ? u : I, R = g || ((S) => r((q) => [...q, S])), s = A || ((S) => r((q) => q.map((de) => de.id === S.id ? S : de))), E = T || ((S) => r((q) => q.filter((de) => de.id !== S))), C = v || [
    { name: "title", label: "Event Title", type: "text", required: !0 },
    { name: "description", label: "Description", type: "textarea" },
    { name: "start", label: "Start Time", type: "datetime-local", required: !0 },
    { name: "end", label: "End Time", type: "datetime-local", required: !0 }
  ], Y = b(
    () => $e(P, t),
    [P, t]
  ), L = b(() => ce || (ne && xe[ne] ? xe[ne] : xe.classic_light), [ce, ne]), ye = b(() => ({
    "--calendar-primary": L.primaryColor,
    "--calendar-bg": L.backgroundColor,
    "--calendar-secondary-bg": L.secondaryBackgroundColor,
    "--calendar-grid": L.gridColor,
    "--calendar-text": L.textColor,
    "--calendar-secondary-text": L.secondaryTextColor,
    "--calendar-accent": L.accentColor,
    "--calendar-event-bg": L.eventDefaultColor,
    "--calendar-event-text": L.eventDefaultTextColor
  }), [L]), ie = b(() => w ?? [], [w]), ae = b(() => new rt(fe, {
    timezone: t,
    slotInterval: 30,
    // Placeholder for MonthView
    events: ie,
    onEventChange: i,
    onAddEvent: R,
    onEditEvent: s,
    onDeleteEvent: E
  }), [fe, t, ie, i, R, s, E]), [V, J] = B(!1), [De, z] = B(null), [ge, G] = B({}), K = b(() => Y.clone().startOf("month"), [Y]), re = b(() => Y.clone().endOf("month"), [Y]), oe = b(() => K.clone().startOf("week"), [K]), x = b(() => re.clone().endOf("week"), [re]), H = b(() => {
    const S = [];
    let q = oe.clone();
    for (; q.isBefore(x) || q.isSame(x, "day"); )
      S.push(q.clone()), q.add(1, "day");
    return S;
  }, [oe, x]), W = () => $(Y.clone().subtract(1, "month")), ve = () => $(Y.clone().add(1, "month")), Q = () => $(f.utc().tz(t)), Ne = () => {
    J(!1), z(null), G({});
  }, F = /* @__PURE__ */ a("div", { className: "text-center flex flex-col items-center", children: [
    /* @__PURE__ */ e("h2", { className: "text-xl font-semibold", children: Y.format(l) }),
    d && /* @__PURE__ */ a("p", { className: "text-xs mt-1", style: { color: "var(--calendar-secondary-text)" }, children: [
      "GMT",
      Y.format("Z"),
      " • ",
      t
    ] }),
    /* @__PURE__ */ e("button", { onClick: Q, className: "mt-1 text-sm font-medium", style: { color: "var(--calendar-primary)" }, children: "Today" })
  ] }), _ = /* @__PURE__ */ e("button", { onClick: W, className: "px-3 py-1 rounded hover:opacity-70 transition-opacity", style: { color: "var(--calendar-text)" }, children: "◀" }), N = /* @__PURE__ */ e("button", { onClick: ve, className: "px-3 py-1 rounded hover:opacity-70 transition-opacity", style: { color: "var(--calendar-text)" }, children: "▶" }), pe = /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
    _,
    N
  ] }), Ye = h ? h({
    goToPreviousDay: W,
    goToNextDay: ve,
    goToToday: Q,
    dateNode: F,
    prevNode: _,
    nextNode: N,
    defaultNav: pe,
    currentDate: Y,
    timezone: t
  }) : null;
  return /* @__PURE__ */ a("div", { className: "flex flex-col flex-1 h-full w-full min-h-0 no-scrollbar", style: { ...ye, backgroundColor: "var(--calendar-bg)", color: "var(--calendar-text)" }, children: [
    h != null ? /* @__PURE__ */ e("div", { children: Ye }, "custom-nav-wrapper") : /* @__PURE__ */ a("div", { className: "sticky top-0 z-20 border-b px-6 py-4 flex items-center min-h-[80px]", style: { backgroundColor: "var(--calendar-bg)", borderColor: "var(--calendar-grid)" }, children: [
      m === "left" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center", children: pe }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: F }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      m === "center" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ a("div", { className: "flex-1 flex justify-center items-center gap-4", children: [
          _,
          F,
          N
        ] }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      m === "right" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: F }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center gap-4", children: pe })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-7 border-b", style: { borderColor: "var(--calendar-grid)" }, children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((S) => /* @__PURE__ */ e("div", { className: "py-2 text-center text-xs font-semibold uppercase tracking-wider", style: { color: "var(--calendar-secondary-text)" }, children: S }, S)) }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto no-scrollbar", children: /* @__PURE__ */ e("div", { className: "grid grid-cols-7 min-h-full", children: H.map((S, q) => {
      const de = S.isSame(Y, "month"), ue = S.isSame(f().tz(t), "day"), ke = tt(ie, S, t);
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
            if (te) {
              const O = S.clone().hour(9).minute(0), me = O.clone().add(1, "hour");
              G({
                start: O.format(`${l || "YYYY-MM-DD"}T${o || "HH:mm"}`),
                end: me.format(`${l || "YYYY-MM-DD"}T${o || "HH:mm"}`)
              }), J(!0);
            }
          },
          children: [
            /* @__PURE__ */ e("div", { className: "flex justify-end pr-1", children: /* @__PURE__ */ e(
              "span",
              {
                className: `text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${ue ? "text-white" : ""}`,
                style: ue ? { backgroundColor: "var(--calendar-primary)" } : { color: de ? "var(--calendar-text)" : "var(--calendar-secondary-text)" },
                children: S.date()
              }
            ) }),
            /* @__PURE__ */ a("div", { className: "flex flex-col gap-1 flex-1 overflow-hidden", children: [
              ke.slice(0, 4).map((O) => /* @__PURE__ */ e(
                "div",
                {
                  onClick: (me) => {
                    me.stopPropagation(), ae.triggerOnEventClick(O), te && (z(O), G({
                      ...O,
                      start: f(O.start).tz(t).format(`${l || "YYYY-MM-DD"}T${o || "HH:mm"}`),
                      end: f(O.end).tz(t).format(`${l || "YYYY-MM-DD"}T${o || "HH:mm"}`)
                    }), J(!0));
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
        q
      );
    }) }) }),
    te && /* @__PURE__ */ e(
      ot,
      {
        isOpen: V,
        onClose: Ne,
        editingEvent: De,
        formData: ge,
        setFormData: G,
        formFields: C,
        timezone: t,
        dateFormat: l,
        timeFormat: o,
        onAddEvent: R,
        onEditEvent: s,
        onDeleteEvent: E,
        pluginManager: ae,
        events: w
      }
    )
  ] });
}, kt = (t) => {
  const {
    timezone: d = f.tz.guess() || "UTC",
    selectedDate: l,
    onDateChange: o,
    events: n,
    onAddEvent: k,
    onEditEvent: u,
    onDeleteEvent: i,
    calendarTheme: m,
    calendarThemeVariant: h,
    navigationPosition: g = "center",
    renderNavigation: A,
    dateFormat: T = "MMMM YYYY",
    timeFormat: v = "HH:mm",
    showTimeSlots: te = !1
  } = t, [fe, ce] = B(() => f.tz(l || /* @__PURE__ */ new Date(), d)), ne = l !== void 0 ? l : fe, X = b(
    () => $e(ne, d),
    [ne, d]
  ), [le, P] = B(() => X.clone().startOf("month")), $ = (x) => {
    o ? o(x) : ce(x), P(x.clone().startOf("month"));
  }, [I, r] = B(() => n || []), w = n !== void 0 ? n : I, R = k || ((x) => r((H) => [...H, x])), s = u || ((x) => r((H) => H.map((W) => W.id === x.id ? x : W))), E = i || ((x) => r((H) => H.filter((W) => W.id !== x))), C = b(() => m || (h && xe[h] ? xe[h] : xe.classic_light), [m, h]), Y = b(() => ({
    "--calendar-primary": C.primaryColor,
    "--calendar-bg": C.backgroundColor,
    "--calendar-secondary-bg": C.secondaryBackgroundColor,
    "--calendar-grid": C.gridColor,
    "--calendar-text": C.textColor,
    "--calendar-secondary-text": C.secondaryTextColor,
    "--calendar-accent": C.accentColor,
    "--calendar-event-bg": C.eventDefaultColor,
    "--calendar-event-text": C.eventDefaultTextColor
  }), [C]), L = le.clone().startOf("month"), ye = le.clone().endOf("month"), ie = L.clone().startOf("week"), ae = ye.clone().endOf("week"), V = b(() => {
    const x = [];
    let H = ie.clone();
    for (; H.isBefore(ae) || H.isSame(ae, "day"); )
      x.push(H.clone()), H.add(1, "day");
    return x;
  }, [ie, ae]), J = () => P((x) => x.clone().subtract(1, "month")), De = () => P((x) => x.clone().add(1, "month")), z = () => $(f.utc().tz(d)), ge = /* @__PURE__ */ a("div", { className: "text-center flex flex-col items-center", children: [
    /* @__PURE__ */ e("h2", { className: "text-xl font-semibold", style: { color: "var(--calendar-text)" }, children: X.format(T) }),
    /* @__PURE__ */ e("button", { onClick: z, className: "mt-1 text-sm font-medium", style: { color: "var(--calendar-primary)" }, children: "Today" })
  ] }), G = /* @__PURE__ */ e("button", { onClick: () => $(X.clone().subtract(1, "month")), className: "px-3 py-1 rounded hover:bg-gray-100 transition-colors", style: { color: "var(--calendar-text)" }, children: "◀" }), K = /* @__PURE__ */ e("button", { onClick: () => $(X.clone().add(1, "month")), className: "px-3 py-1 rounded hover:bg-gray-100 transition-colors", style: { color: "var(--calendar-text)" }, children: "▶" }), re = /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
    G,
    K
  ] }), oe = A ? A({
    goToPreviousDay: () => $(X.clone().subtract(1, "month")),
    goToNextDay: () => $(X.clone().add(1, "month")),
    goToToday: z,
    dateNode: ge,
    prevNode: G,
    nextNode: K,
    defaultNav: re,
    currentDate: X,
    timezone: d
  }) : null;
  return /* @__PURE__ */ a("div", { className: "flex flex-col h-full w-full no-scrollbar", style: { ...Y, backgroundColor: "var(--calendar-bg)" }, children: [
    A ? oe : /* @__PURE__ */ a("div", { className: "sticky top-0 z-20 border-b px-6 py-4 flex items-center min-h-[80px]", style: { backgroundColor: "var(--calendar-bg)", borderColor: "var(--calendar-grid)" }, children: [
      g === "left" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center", children: re }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: ge }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      g === "center" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ a("div", { className: "flex-1 flex justify-center items-center gap-4", children: [
          G,
          ge,
          K
        ] }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center" })
      ] }),
      g === "right" && /* @__PURE__ */ a(se, { children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-start items-center" }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-center items-center", children: ge }),
        /* @__PURE__ */ e("div", { className: "flex-1 flex justify-end items-center gap-4", children: re })
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
                  onClick: J,
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
            /* @__PURE__ */ e("div", { className: "grid grid-cols-7 mb-2", children: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((x) => /* @__PURE__ */ e("div", { className: "text-center text-[10px] font-bold uppercase", style: { color: "var(--calendar-secondary-text)" }, children: x }, x)) }),
            /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-1", children: V.map((x, H) => {
              const W = x.isSame(le, "month"), ve = x.isSame(X, "day"), Q = x.isSame(f().tz(d), "day");
              let Ne = "hover:bg-gray-200", F = { color: "var(--calendar-text)" }, _ = {};
              return W || (F = { color: "var(--calendar-secondary-text)", opacity: 0.5 }), ve ? (Ne = "", _ = { backgroundColor: "var(--calendar-primary)", color: "white" }, F = { color: "white" }) : Q && (_ = { border: "2px solid var(--calendar-primary)", fontWeight: "bold" }, F = { color: "var(--calendar-primary)" }), /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => $(x),
                  className: `h-8 w-8 flex items-center justify-center rounded-full text-xs transition-colors ${Ne}`,
                  style: { ...F, ..._ },
                  children: x.date()
                },
                H
              );
            }) })
          ]
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex-1 min-w-0 h-full overflow-hidden bg-white", children: /* @__PURE__ */ e(
        gt,
        {
          ...t,
          selectedDate: ne,
          onDateChange: $,
          events: w,
          showTimeSlots: te,
          onAddEvent: R,
          onEditEvent: s,
          onDeleteEvent: E,
          renderNavigation: () => /* @__PURE__ */ e(se, {}),
          showTodayBelow: !1,
          dateFormat: T,
          timeFormat: v
        }
      ) })
    ] })
  ] });
};
export {
  kt as Calendar,
  gt as DayView,
  Nt as MonthView,
  xe as PREDEFINED_CALENDAR_THEMES,
  xt as PREDEFINED_CONFLICT_TEMPLATES,
  Z as SLOT_HEIGHT,
  Ct as WeekView,
  dt as calculateLayoutEvents,
  et as checkIsSlotEnabled,
  vt as detectConflicts,
  ct as generateTimeSlots,
  tt as getDayEvents,
  st as getWorkingHoursRange,
  $e as normalizeDate
};
