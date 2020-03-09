const stego = require("./unicode_steganography.js").unicodeSteganographer;
stego.setUseChars('\u200b\u200c\u200d\u200e\u200f');
console.log(stego.decodeText("W​​​​‏​‍​​​‏‌‎​​​​‎‏‍​​​​‏​‎​​​​‏‏‎​​​​‏‎‏​​​​‍​‌​​​​‎‏​​​​​‏​‎​​​​‏‍‏​​​​‍​‌​​​​‍​‌​​​​‍‌​​​​​‎‏​​​​​‏​‏​​​​‍​‍​​​​‎‏‏​​​​‏‌‍​​​​‍​‌​​​​‏‍‏​​​​‏‏‍​​​​‎‏​​​​​‏‎‏​​​​‌‏‏​​​​‏‎‌​​​​‏​‏​​​​‎‏​​​​​‏‎‍​​​​‏‍​​​​​‌‏‏​​​​‎‏‏​​​​‌‏‎​​​​‏​​​​​​‍​‌​​​‌​​﻿﻿​​​​​​​​Lorem ipsum​​​​​​​ dolor ‌‌‌‌‍﻿‍‍sit​​​​​​​​ amet​​​​​​​​​‌‌‌‌‍﻿‍‌, consectetur ​​​​​​​adipiscing​​​​​​​‌‌‌‌‍‬‍‬ elit​​​​​​​.‌‌‌‌‍‬﻿‌​​​​​​​‌‌‌‌‍‬‌‍ Phasellus quis​​​​​​​ tempus​​​​​​ ante, ​​​​​​​​nec vehicula​​​​​​​​​​​​​​​​ mi​​​​​​​​. ​​​​​​​‌‌‌‌‍‬‍﻿Aliquam nec​​​​​​​​​‌‌‌‌‍﻿‬﻿ nisi ut neque​​​​​​​ interdum auctor​​​​​​​.‌‌‌‌‍﻿‍﻿ Aliquam felis ‌‌‌‌‍‬‬‌orci​​​​​​​, vestibulum ‌‌‌‌‍﻿‬‍sit ​​​​​​​amet​​​​​​​​​ ante‌‌‌‌‍‌﻿‬ at​​​​​​​, consectetur‌‌‌‌‍‌﻿﻿ lobortis eros​​​​​​​​​.‌‌‌‌‍‍‍‌ ‌‌‌‌‍‌‌‌​​​​​​​Orci varius​​​​​​​ ​​​​​​​natoque ‌‌‌‌‍﻿‌﻿penatibus et ‌‌‌‌‍‬‌﻿​​​​​​​magnis‌‌‌‌‌﻿‌‍‌‌‌‌‌﻿‌‍ dis ​​​​​​​‌‌‌‌‍‍﻿﻿parturient montes, ​​​​​​​nascetur ridiculus ‌‌‌‌‌﻿‍‌​​​​​​​​​​​​​​‌‌‌‌‌﻿‬‍mus. In finibus‌‌‌‌‌﻿‌‬ magna​​​​​​‌‌‌‌‌﻿‍﻿ mauris, quis‌‌‌‌‍‬‌‍ auctor ‌‌‌‌‍‬‌‍libero congue quis. ‌‌‌‌‍‬‬‬Duis‌‌‌‌‍‬‌‬ sagittis consequat urna non tristique. Pellentesque eu lorem ‌‌‌‌‍﻿‌‍id‌‌‌‌‍‬‬﻿ quam vestibulum ultricies vel ac purus‌‌‌‌‌﻿‌‍"));
