< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    meta charSet = "utf-8" / >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1" / >
    <
    link rel = "preload"
as = "image"
href = "/assets/hero-BdQX1V-z.jpg" / >
    <
    link rel = "stylesheet"
href = "/assets/styles-3KXyg0ew.css"
data - precedence = "default" / >
    <
    link rel = "stylesheet"
href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap"
data - precedence = "default" / >
    <
    title > lululemon | Get a $750 Gift Card < /title> <
    meta name = "author"
content = "Lovable" / >
    <
    meta name = "twitter:site"
content = "@Lovable" / >
    <
    meta name = "description"
content = "Join the lululemon at-home product testing program, share your honest feedback, and receive a $750 gift card. Limited time offer." / >
    <
    meta property = "og:title"
content = "lululemon | Get a $750 Gift Card" / >
    <
    meta property = "og:description"
content = "Try lululemon gear from home, share your review, and claim a $750 gift card. Limited time offer." / >
    <
    meta property = "og:type"
content = "website" / >
    <
    meta name = "twitter:card"
content = "summary_large_image" / >
    <
    link rel = "modulepreload"
href = "/assets/index-D_H1atCe.js" / >
    <
    link rel = "modulepreload"
href = "/assets/routes-DQuNs208.js" / >
    <
    link rel = "icon"
href = "/favicon.ico"
type = "image/x-icon" / >
    <
    link rel = "preconnect"
href = "https://fonts.googleapis.com" / >
    <
    link rel = "preconnect"
href = "https://fonts.gstatic.com"
crossorigin = "anonymous" / >
    <
    style >
    @font - face {
        font - family: 'CameraPlainVariable';
        src: url('https://cdn.gpteng.co/mcp-widgets/v1/fonts/CameraPlainVariable.woff2') format('woff2');
        font - weight: 100 900;
        font - style: normal;
        font - display: swap;
    }

#
lovable - badge {
        --badge - bg: #1b1b1b;
            --badge-text: # c5c1b9;
        --badge - text - hover: #dcdad5;
        --badge - radius: 6 px;
        --badge - padding: 8 px;
        --badge - gap: 6 px;
        --badge - shadow: 0 0 0 1 px rgba(0, 0, 0, 0.88), 0 1 px 0 0 rgba(0, 0, 0, 0.04), 0 2 px 2 px - 1 px rgba(0, 0, 0, 0.08), 0 4 px 4 px - 2 px rgba(0, 0, 0, 0.08), 0 8 px 8 px - 4 px rgba(0, 0, 0, 0.08), 0 16 px 16 px - 8 px rgba(0, 0, 0, 0.08);
        --badge - transition - duration: 0.2 s;
        --badge - transition - easing: cubic - bezier(0.16, 1, 0.32, 1);
        --focus - color: #575ECF;
            --focus-offset: 2px;
            --focus-width: 2px;
            position: fixed;
            bottom: 12px;
            right: 12px;
            height: 24px;
            display: flex;
            align-items: center;
            z-index: 1000000;
            background-color: var(--badge-bg) !important;
            color: var(--badge-text) !important;
            border-radius: var(--badge-radius);
            box-shadow: var(--badge-shadow) !important;
            font-size: 12px;
            font-family: CameraPlainVariable, "CameraPlainVariable Fallback", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-weight: 400 !important;
            text-transform: none !important;
            font-feature-settings: normal !important;
            transform: translateZ(0);
            will-change: transform, opacity;
        }

        # lovable - badge - cta {
            display: flex;
            align - items: center;
            gap: var (--badge - gap);
            padding: 0
            var (--badge - padding);
            height: 100 % ;
            color: inherit;
            text - decoration: none;
            white - space: nowrap;
            border - radius: var (--badge - radius) 0 0
            var (--badge - radius);
            transition: background - color
            var (--badge - transition - duration) ease,
            color
            var (--badge - transition - duration) ease,
            transform 0.1 s ease;
        }

        #
        lovable - badge - cta: hover {
            background: rgba(255, 255, 255, 0.04);
            color: var (--badge - text - hover);
        }

        #
        lovable - badge - cta: active {
            transform: scale(0.98);
        }

        #
        lovable - badge - cta: focus {
            outline: none;
        }

        #
        lovable - badge - cta: focus - visible {
            outline: var (--focus - width) solid
            var (--focus - color);
            outline - offset: var (--focus - offset);
            z - index: 1;
        }

        #
        lovable - badge - text {
            line - height: 1;
        }

        #
        lovable - badge - divider {
            width: 1 px;
            height: 24 px;
            background - color: rgba(255, 255, 255, 0.04);
            flex - shrink: 0;
        }

        #
        lovable - badge - close {
            width: 24 px;
            height: 24 px;
            min - width: 24 px;
            min - height: 24 px;
            cursor: pointer;
            background: none;
            border: none;
            padding: 0;
            display: flex;
            align - items: center;
            justify - content: center;
            border - radius: 0
            var (--badge - radius) var (--badge - radius) 0;
            flex - shrink: 0;
            transition: background - color
            var (--badge - transition - duration) ease,
            transform 0.1 s ease;
        }

        #
        lovable - badge - close: hover {
            background: rgba(255, 255, 255, 0.04);
        }

        #
        lovable - badge - close: active {
            transform: scale(0.92);
        }

        #
        lovable - badge - close: focus {
            outline: none;
        }

        #
        lovable - badge - close: focus - visible {
            outline: var (--focus - width) solid
            var (--focus - color);
            outline - offset: calc(var (--focus - offset) * -1);
            z - index: 1;
        }

        #
        lovable - badge - close svg path {
            fill: var (--badge - text);
            transition: fill
            var (--badge - transition - duration) ease;
        }

        #
        lovable - badge - close: hover svg path {
            fill: var (--badge - text - hover);
        }

        @media(prefers - reduced - motion: reduce) {#
            lovable - badge - cta, #lovable - badge - close, #lovable - badge - close svg path {
                transition: none;
            }#
            lovable - badge - cta: active, #lovable - badge - close: active {
                transform: none;
            }
        }

        @media(prefers - contrast: high) {#
                lovable - badge {
                    --badge - bg: #000;
                --badge-text: # fff;
                    --badge - text - hover: #fff;
                    border: 2 px solid currentColor;
                }#
                lovable - badge - cta: focus - visible, #lovable - badge - close: focus - visible {
                    outline - width: 3 px;
                }
            } <
            /style> <
            script defer src = "/~flock.js"
        data - proxy - url = "/~api/analytics" > < /script> <
            meta name = "twitter:title"
        content = "lululemon | Get a $750 Gift Card" >
            <
            meta name = "twitter:description"
        content = "Try lululemon gear from home, share your review, and claim a $750 gift card. Limited time offer." >
            <
            meta property = "og:image"
        content = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/203d1835702aadb896b5014a58803cb4/id-preview-d7be4d06--9e03a2a3-3284-49ad-8c32-34acf4418239.lovable.app-1789087770404.png" >
            <
            meta name = "twitter:image"
        content = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/203d1835702aadb896b5014a58803cb4/id-preview-d7be4d06--9e03a2a3-3284-49ad-8c32-34acf4418239.lovable.app-1789087770404.png" >
            <
            /head>

            <
            body >
            <!--$-->
            <
            div class = "min-h-screen bg-ivory font-body text-ink" >
            <
            section class = "relative flex min-h-[92vh] flex-col overflow-hidden" > < img src = "/assets/hero-BdQX1V-z.jpg"
        alt = "Athlete meditating on a mountain summit at sunset"
        class = "absolute inset-0 h-full w-full object-cover" / >
            <
            div class = "absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" > < /div> <
            div class = "relative z-10 flex flex-1 flex-col items-start justify-center px-6 pb-24 md:px-16" >
            <
            div class = "text-ivory" >
            <
            div class = "flex items-center justify-center gap-4" > < span class = "h-px w-16 bg-current opacity-30" > < /span><span class="text-xs font-semibold tracking-[0.35em]">Limited Time Offer</span > < span class = "h-px w-16 bg-current opacity-30" > < /span></div >
            <
            /div> <
            h1 class = "mt-6 text-6xl font-extrabold lowercase leading-none tracking-[-0.03em] text-ivory md:text-8xl" > lululemon < /h1> <
            p class = "mt-6 max-w-xl text-lg leading-relaxed text-ivory/90 md:text-xl" > Try exclusive
            <!-- -->lululemon
            <!-- -->gear from home and get a $750 gift card</p><a href="https://linkthem.net/aff_c?offer_id=1139&amp;aff_id=149987" class="group mt-10 inline-flex items-center gap-3 rounded-full bg-ivory px-12 py-4 text-sm font-bold tracking-[0.25em] text-ink shadow-xl transition-all hover:scale-[1.03] hover:shadow-2xl">Apply Now<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
            <
            p
        class = "mt-5 text-xs italic text-ivory/70" > * Available
        for all ages and countries. < /p> <
            /div> <
            /section> <
            section class = "px-6 py-16 md:px-16" >
            <
            div class = "mx-auto max-w-5xl" >
            <
            div class = "grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4" >
            <
            div class = "flex flex-col items-center text-center" > < span class = "mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-brand hover:text-brand" > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        stroke - width = "1.25"
        stroke - linecap = "round"
        stroke - linejoin = "round"
        class = "lucide lucide-shopping-bag h-8 w-8"
        aria - hidden = "true" > < path d = "M16 10a4 4 0 0 1-8 0" > < /path><path d="M3.103 6.034h17.794"></path > < path d = "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" > < /path></svg > < /span> <
            h3
        class = "text-sm font-bold tracking-[0.15em] text-ink" > 1. Apply Now < /h3> <
            p class = "mt-1.5 max-w-40 font-serif text-[15px] italic leading-snug text-ink/70" > Quick and easy registration < /p> <
            /div> <
            div class = "flex flex-col items-center text-center" > < span class = "mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-brand hover:text-brand" > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        stroke - width = "1.25"
        stroke - linecap = "round"
        stroke - linejoin = "round"
        class = "lucide lucide-shirt h-8 w-8"
        aria - hidden = "true" > < path d = "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" > < /path></svg > < /span> <
            h3
        class = "text-sm font-bold tracking-[0.15em] text-ink" > 2. Try < /h3> <
            p class = "mt-1.5 max-w-40 font-serif text-[15px] italic leading-snug text-ink/70" > Try lululemon products at home < /p> <
            /div> <
            div class = "flex flex-col items-center text-center" > < span class = "mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-brand hover:text-brand" > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        stroke - width = "1.25"
        stroke - linecap = "round"
        stroke - linejoin = "round"
        class = "lucide lucide-star h-8 w-8"
        aria - hidden = "true" > < path d = "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" > < /path></svg > < /span> <
            h3
        class = "text-sm font-bold tracking-[0.15em] text-ink" > 3. Earn < /h3> <
            p class = "mt-1.5 max-w-40 font-serif text-[15px] italic leading-snug text-ink/70" > Share your honest review < /p> <
            /div> <
            div class = "flex flex-col items-center text-center" > < span class = "mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-brand hover:text-brand" > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        stroke - width = "1.25"
        stroke - linecap = "round"
        stroke - linejoin = "round"
        class = "lucide lucide-gift h-8 w-8"
        aria - hidden = "true" > < path d = "M12 7v14" > < /path><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path > < path d = "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" > < /path><rect x="3" y="7" width="18" height="4" rx="1"></rect > < /svg></span >
            <
            h3
        class = "text-sm font-bold tracking-[0.15em] text-ink" > 4. Get Rewarded < /h3> <
            p class = "mt-1.5 max-w-40 font-serif text-[15px] italic leading-snug text-ink/70" > Receive a $750 gift card < /p> <
            /div> <
            /div> <
            /div> <
            /section> <
            section id = "offer"
        class = "px-6 pb-16 md:px-16" >
            <
            div class = "mx-auto max-w-3xl rounded-3xl bg-ink px-6 py-12 text-center text-ivory shadow-2xl md:px-16" >
            <
            div class = "text-ivory/80" >
            <
            div class = "flex items-center justify-center gap-4" > < span class = "h-px w-16 bg-current opacity-30" > < /span><span class="text-xs font-semibold tracking-[0.35em]">Limited Time Offer</span > < span class = "h-px w-16 bg-current opacity-30" > < /span></div >
            <
            /div> <
            div class = "mt-6 flex justify-center" > < span class = "block text-5xl font-extrabold lowercase leading-none tracking-[-0.03em] md:text-6xl text-ivory" > lululemon < /span></div >
            <
            h2 class = "mt-6 font-serif text-4xl font-bold italic md:text-5xl" > Get a $750 Gift Card < /h2> <
            div class = "mt-10 grid grid-cols-4 divide-x divide-ivory/20" >
            <
            div class = "px-2" >
            <
            div class = "text-4xl font-extrabold tabular-nums md:text-5xl" > 02 < /div> <
            div class = "mt-2 text-[11px] font-semibold tracking-[0.3em] text-ivory/60" > Days < /div> <
            /div> <
            div class = "px-2" >
            <
            div class = "text-4xl font-extrabold tabular-nums md:text-5xl" > 14 < /div> <
            div class = "mt-2 text-[11px] font-semibold tracking-[0.3em] text-ivory/60" > Hours < /div> <
            /div> <
            div class = "px-2" >
            <
            div class = "text-4xl font-extrabold tabular-nums md:text-5xl" > 34 < /div> <
            div class = "mt-2 text-[11px] font-semibold tracking-[0.3em] text-ivory/60" > Minutes < /div> <
            /div> <
            div class = "px-2" >
            <
            div class = "text-4xl font-extrabold tabular-nums md:text-5xl" > 46 < /div> <
            div class = "mt-2 text-[11px] font-semibold tracking-[0.3em] text-ivory/60" > Seconds < /div> <
            /div> <
            /div> <
            /div> <
            div class = "mt-12 text-center" > < a href = "https://linkthem.net/aff_c?offer_id=1139&amp;aff_id=149987"
        class = "group inline-flex items-center gap-3 rounded-full bg-brand px-16 py-4 text-sm font-bold tracking-[0.25em] text-brand-foreground shadow-lg shadow-brand/30 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-brand/40" > Apply Now < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        stroke - width = "2"
        stroke - linecap = "round"
        stroke - linejoin = "round"
        class = "lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1"
        aria - hidden = "true" > < path d = "M5 12h14" > < /path><path d="m12 5 7 7-7 7"></path > < /svg></a >
            <
            p
        class = "mt-4 text-xs italic text-ink/60" > * Available
        for all ages and countries. < /p> <
            /div> <
            /section> <
            section class = "px-6 pb-20 md:px-16" >
            <
            div class = "mx-auto max-w-5xl" >
            <
            div class = "mb-14 text-ink" >
            <
            div class = "flex items-center justify-center gap-4" > < span class = "h-px w-16 bg-current opacity-30" > < /span><span class="text-xs font-semibold tracking-[0.35em]">How It Works</span > < span class = "h-px w-16 bg-current opacity-30" > < /span></div >
            <
            /div> <
            div class = "grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4" >
            <
            div class = "flex flex-col items-center text-center" > < span class = "mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-brand hover:text-brand" > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        stroke - width = "1.25"
        stroke - linecap = "round"
        stroke - linejoin = "round"
        class = "lucide lucide-shopping-bag h-8 w-8"
        aria - hidden = "true" > < path d = "M16 10a4 4 0 0 1-8 0" > < /path><path d="M3.103 6.034h17.794"></path > < path d = "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" > < /path></svg > < /span> <
            h3
        class = "text-sm font-bold tracking-[0.15em] text-ink" > 1. Apply Now < /h3> <
            p class = "mt-1.5 max-w-40 font-serif text-[15px] italic leading-snug text-ink/70" > Quick and easy registration < /p> <
            /div> <
            div class = "flex flex-col items-center text-center" > < span class = "mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-brand hover:text-brand" > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        stroke - width = "1.25"
        stroke - linecap = "round"
        stroke - linejoin = "round"
        class = "lucide lucide-shirt h-8 w-8"
        aria - hidden = "true" > < path d = "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" > < /path></svg > < /span> <
            h3
        class = "text-sm font-bold tracking-[0.15em] text-ink" > 2. Try < /h3> <
            p class = "mt-1.5 max-w-40 font-serif text-[15px] italic leading-snug text-ink/70" > Try lululemon products at home < /p> <
            /div> <
            div class = "flex flex-col items-center text-center" > < span class = "mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-brand hover:text-brand" > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        stroke - width = "1.25"
        stroke - linecap = "round"
        stroke - linejoin = "round"
        class = "lucide lucide-star h-8 w-8"
        aria - hidden = "true" > < path d = "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" > < /path></svg > < /span> <
            h3
        class = "text-sm font-bold tracking-[0.15em] text-ink" > 3. Earn < /h3> <
            p class = "mt-1.5 max-w-40 font-serif text-[15px] italic leading-snug text-ink/70" > Share your honest review < /p> <
            /div> <
            div class = "flex flex-col items-center text-center" > < span class = "mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-brand hover:text-brand" > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        stroke - width = "1.25"
        stroke - linecap = "round"
        stroke - linejoin = "round"
        class = "lucide lucide-gift h-8 w-8"
        aria - hidden = "true" > < path d = "M12 7v14" > < /path><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path > < path d = "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" > < /path><rect x="3" y="7" width="18" height="4" rx="1"></rect > < /svg></span >
            <
            h3
        class = "text-sm font-bold tracking-[0.15em] text-ink" > 4. Get Rewarded < /h3> <
            p class = "mt-1.5 max-w-40 font-serif text-[15px] italic leading-snug text-ink/70" > Receive a $750 gift card < /p> <
            /div> <
            /div> <
            /div> <
            /section> <
            footer class = "bg-ink px-6 py-14 text-center text-ivory" >
            <
            div class = "flex justify-center" > < span class = "block text-5xl font-extrabold lowercase leading-none tracking-[-0.03em] md:text-6xl text-ivory" > lululemon < /span></div >
            <
            div class = "mt-8 text-ivory/60" >
            <
            div class = "flex items-center justify-center gap-4" > < span class = "h-px w-16 bg-current opacity-30" > < /span><span class="text-xs font-semibold tracking-[0.35em]">More than activewear — a lifestyle</span > < span class = "h-px w-16 bg-current opacity-30" > < /span></div >
            <
            /div> <
            p class = "mt-8 text-xs text-ivory/40" > ©2026
            <!-- -->lululemon
            <!-- -->. All rights reserved.</p>
            <
            /footer> <
            /div> <
            script >
            (function(a, f) {
                let l;
                try {
                    l = JSON.parse(sessionStorage.getItem(a) || "{}")
                } catch {
                    return
                }
                const n = l ? .[f || history.state ? .__TSR_key];
                let c = !1;
                for (const t in n) {
                    const e = n[t],
                        o = e ? .scrollX,
                        s = e ? .scrollY;
                    if (Number.isFinite(o) && Number.isFinite(s)) {
                        if (t === "window") scrollTo(o, s), c = !0;
                        else if (t) try {
                            const r = document.querySelector(t);
                            r && (r.scrollLeft = o, r.scrollTop = s)
                        } catch {}
                    }
                }
                if (c) return;
                const i = location.hash.slice(1);
                if (i) {
                    const t = history.state ? .__hashScrollIntoViewOptions ? ? !0;
                    if (t) {
                        const e = document.getElementById(i);
                        e && e.scrollIntoView(t)
                    }
                    return
                }
                scrollTo(0, 0)
            })("tsr-scroll-restoration-v1_3");
        document.currentScript.remove() <
            /script>
            <!--/$-->
            <
            script class = "$tsr"
        id = "$tsr-stream-barrier" >
            (self.$R = self.$R || {})["tsr"] = [];
        self.$_TSR = {
            h() {
                this.hydrated = !0, this.c()
            },
            e() {
                this.streamEnded = !0, this.c()
            },
            c() {
                this.hydrated && this.streamEnded && (delete self.$_TSR, delete self.$R.tsr)
            },
            p(e) {
                this.initialized ? e() : this.buffer.push(e)
            },
            buffer: []
        };
        $_TSR.router = ($R => $R[0] = {
            manifest: $R[1] = {
                routes: $R[2] = {
                    __root__: $R[3] = {
                        preloads: $R[4] = ["/assets/index-D_H1atCe.js"],
                        scripts: $R[5] = [$R[6] = {
                            attrs: $R[7] = {
                                type: "module",
                                async: !0,
                                src: "/assets/index-D_H1atCe.js"
                            }
                        }]
                    },
                    "/": $R[8] = {
                        preloads: $R[9] = ["/assets/routes-DQuNs208.js"]
                    }
                }
            },
            matches: $R[10] = [$R[11] = {
                i: "__root__ ",
                u: 1789087839788,
                s: "success",
                ssr: !0
            }, $R[12] = {
                i: "  ",
                u: 1789087839788,
                s: "success",
                ssr: !0
            }],
            lastMatchId: "  "
        })($R["tsr"]);
        $_TSR.e();
        document.currentScript.remove() <
            /script> <
            /svg>


            <
            /a>

            <
            span id = "lovable-badge-divider"
        aria - hidden = "true" > < /span>

            <
            button id = "lovable-badge-close"
        aria - label = "Dismiss"
        title = "Dismiss"
        type = "button" >
            <
            svg xmlns = "http://www.w3.org/2000/svg"
        width = "16"
        height = "16"
        fill = "none"
        viewBox = "0 0 16 16"
        aria - hidden = "true" >
            <
            path d = "M10.646 4.646a.5.5 0 1 1 .707.708L8.707 8l2.646 2.646a.5.5 0 1 1-.707.707L8 8.707l-2.646 2.646a.5.5 0 1 1-.708-.707L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708L8 7.293l2.646-2.647Z" / >
            <
            /svg> <
            /button> <
            /aside> <
            script >
            // Don't show the lovable-badge if the page is in an iframe or if it's being rendered by puppeteer (screenshot service)
            if (window.self !== window.top || navigator.userAgent.includes('puppeteer')) {
                var badge = document.getElementById('lovable-badge');
                if (badge) {
                    badge.style.display = 'none';
                }
            }

        // Add click event listener to close button with animation
        var closeButton = document.getElementById('lovable-badge-close');
        if (closeButton) {
            closeButton.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                var badge = document.getElementById('lovable-badge');
                if (badge) {
                    badge.classList.add('closing');
                    setTimeout(function() {
                        if (badge) {
                            badge.style.display = 'none';
                        }
                    }, 240);
                }
            });
        } <
        /script> <
        /body>

        <
        /html>