import{s as N,n as D,x,o as en,b as tn,c as sn}from"./CiuLsXXn.js";import{S as O,i as U,d,l as c,z as B,a as W,h as f,c as v,j as _,A as V,b as R,e as T,B as z,s as E,n as G,o as H,p as P,f as X,v as rn,w as on,q as F,k as Z,r as J,t as K,u as Q}from"./HHCbWf8g.js";import{w as an,a as A}from"./DIvOuSCd.js";const ln=an(null),un=`

// @ts-ignore
function smoothstep(t) {
    return t * t * (3 - 2 * t);
}

// @ts-ignore
function smootherstep(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
}

// @ts-ignore
function buildTrail(progress, width, height) {

    const opacityT =
        smoothstep(
            Math.min(progress / 0.15, 1)
        );

    const thicknessT =
        smootherstep(
            Math.min(progress / 0.07, 1)
        );

    const growthT =
        smootherstep(
            Math.min(progress / 0.30, 1)
        );

    const penguinSize = 68;

    const minTrail =
        penguinSize *
        (0.10 + thicknessT * 0.25);

    const trailWidth =
        Math.max(
            minTrail,
            width * progress
        );


    const step = 3;
    const center = height / 2;


    const baseHalfHeight =
        height * (
            0.11 +
            0.13 * thicknessT
        );

    const maxBulge =
        height * (
            0.18 +
            0.06 * thicknessT
        );

    const maxTurbulence =
        height * (
            0.16 +
            0.10 * thicknessT
        );

    const noseRegion = 0.12;


    const top = [];
    const bottom = [];


    for (
        let x = trailWidth;
        x >= 0;
        x -= step
    ) {

        const n = x / trailWidth;

        const bulgeT =
            smootherstep(
                Math.max(
                    0,
                    Math.min(
                        1,
                        (n - 0.65) / 0.35
                    )
                )
            );


        const tailT =
            Math.pow(
                Math.max(
                    0,
                    (0.45 - n) / 0.45
                ),
                1.5
            );


        let bodyHeight =
            baseHalfHeight +
            maxBulge *
            bulgeT *
            growthT;


        if (n > 1 - noseRegion) {

            const local =
                (n - (1 - noseRegion))
                / noseRegion;

            const arc =
                Math.sqrt(
                    Math.max(
                        0,
                        1 - local * local
                    )
                );

            bodyHeight *= arc;
        }


        const turbulence =
            maxTurbulence *
            tailT *
            growthT;


        const frequency =
            0.22 +
            (1 - n) * 0.22;


        const wave =
            Math.sin(
                x * frequency
            ) *
            turbulence;


        top.push(
            \`\${x},\${center - bodyHeight + wave}\`
        );
    }


    for (
        let x = 0;
        x <= trailWidth;
        x += step
    ) {

        const n = x / trailWidth;


        const bulgeT =
            smootherstep(
                Math.max(
                    0,
                    Math.min(
                        1,
                        (n - 0.65) / 0.35
                    )
                )
            );


        const tailT =
            Math.pow(
                Math.max(
                    0,
                    (0.45 - n) / 0.45
                ),
                1.5
            );


        let bodyHeight =
            baseHalfHeight +
            maxBulge *
            bulgeT *
            growthT;


        if (n > 1 - noseRegion) {

            const local =
                (n - (1 - noseRegion))
                / noseRegion;

            const arc =
                Math.sqrt(
                    Math.max(
                        0,
                        1 - local * local
                    )
                );

            bodyHeight *= arc;
        }


        const turbulence =
            maxTurbulence *
            tailT *
            growthT;


        const frequency =
            0.22 +
            (1 - n) * 0.22;


        const wave =
            Math.sin(
                x * frequency + 2.5
            ) *
            turbulence;


        bottom.push(
            \`\${x},\${center + bodyHeight + wave}\`
        );
    }


    const path =
        "M " +
        top[0] +
        " L " +
        top.join(" L ") +
        " L " +
        bottom.join(" L ") +
        " Z";


    return {
        path: path,
        trailWidth: trailWidth,
        opacity: opacityT
    };
}
`;function cn(n){let s,e,a,h,p,l,u;return{c(){s=T("div"),e=z("svg"),a=z("path"),p=E(),l=T("img"),this.h()},l(r){s=v(r,"DIV",{class:!0});var o=_(s);e=V(o,"svg",{width:!0,height:!0,viewBox:!0,preserveAspectRatio:!0,class:!0});var t=_(e);a=V(t,"path",{d:!0,fill:!0,opacity:!0,class:!0}),_(a).forEach(d),t.forEach(d),p=R(o),l=v(o,"IMG",{class:!0,src:!0,alt:!0}),o.forEach(d),this.h()},h(){c(a,"d",n[5]),c(a,"fill",n[7]),c(a,"opacity",h=.4*n[1]),c(a,"class","svelte-3rilnw"),c(e,"width","100%"),c(e,"height",I),c(e,"viewBox",`0 0 ${w} ${I}`),c(e,"preserveAspectRatio","none"),c(e,"class","svelte-3rilnw"),c(l,"class","penguin svelte-3rilnw"),x(l.src,u=`${A}/${n[0]}.png`)||c(l,"src",u),c(l,"alt",""),B(l,"left",`${n[2]*n[4]-42+n[6]}px`),c(s,"class","trail svelte-3rilnw")},m(r,o){W(r,s,o),f(s,e),f(e,a),f(s,p),f(s,l),n[16](s)},p(r,[o]){o&32&&c(a,"d",r[5]),o&128&&c(a,"fill",r[7]),o&2&&h!==(h=.4*r[1])&&c(a,"opacity",h),o&1&&!x(l.src,u=`${A}/${r[0]}.png`)&&c(l,"src",u),o&84&&B(l,"left",`${r[2]*r[4]-42+r[6]}px`)},i:D,o:D,d(r){r&&d(s),n[16](null)}}}const w=320,I=50,C=68;function gn(n){return n*n*n*(n*(n*6-15)+10)}function hn(n,s,e){let a,h,p,l;const u=new Function(`
    ${un}

    return buildTrail;
    `)(),r={"penguin-blue":"#3f48cc","penguin-pink":"#ffaec9","penguin-green":"#5ecb72","penguin-yellow":"#ffd966"};let{penguin:o="penguin-blue"}=s,{progress:t=0}=s,i=0,g=0,m=C*(.1+g*.25),y=Math.max(m,w*t),M,k=w,j=k/w,S=u(t,w,I),q=S.path;Math.random().toString(36).slice(2),en(()=>{const b=new ResizeObserver(nn=>{e(12,k=nn[0].contentRect.width)});return b.observe(M),()=>b.disconnect()});function $(b){tn[b?"unshift":"push"](()=>{M=b,e(3,M)})}return n.$$set=b=>{"penguin"in b&&e(0,o=b.penguin),"progress"in b&&e(9,t=b.progress)},n.$$.update=()=>{n.$$.dirty&1&&e(7,a=r[o]??"#ffffff"),n.$$.dirty&512,n.$$.dirty&512&&e(1,i=Math.min(t/.15,1)),n.$$.dirty&2&&e(1,i=i*i*(3-2*i)),n.$$.dirty&512&&e(10,g=Math.min(t/.07,1)),n.$$.dirty&1024&&e(10,g=g*g*g*(g*(g*6-15)+10)),n.$$.dirty&1024&&e(11,m=C*(.1+g*.25)),n.$$.dirty&2560&&e(2,y=Math.max(m,w*t)),n.$$.dirty&9728&&(e(13,S=u(t,w,I)),e(5,q=S.path),e(2,y=S.trailWidth),e(1,i=S.opacity/.4)),n.$$.dirty&4&&e(15,h=y),n.$$.dirty&32768,n.$$.dirty&4096&&e(4,j=k/w),n.$$.dirty&512&&e(14,p=1-gn(Math.min(t/.2,1))),n.$$.dirty&16384&&e(6,l=10*p)},[o,i,y,M,j,q,l,a,u,t,g,m,k,S,p,h,$]}class Y extends O{constructor(s){super(),U(this,s,hn,cn,N,{buildTrail:8,penguin:0,progress:9})}get buildTrail(){return this.$$.ctx[8]}}function L(n){let s,e,a,h,p,l,u;return l=new Y({props:{progress:n[1]/n[4],penguin:n[2]}}),{c(){s=T("div"),e=T("div"),a=T("span"),h=K(n[1]),p=E(),Q(l.$$.fragment),this.h()},l(r){s=v(r,"DIV",{class:!0});var o=_(s);e=v(o,"DIV",{class:!0});var t=_(e);a=v(t,"SPAN",{class:!0});var i=_(a);h=Z(i,n[1]),i.forEach(d),t.forEach(d),p=R(o),J(l.$$.fragment,o),o.forEach(d),this.h()},h(){c(a,"class","steps svelte-8j4ggv"),c(e,"class","row svelte-8j4ggv"),c(s,"class","section svelte-8j4ggv")},m(r,o){W(r,s,o),f(s,e),f(e,a),f(a,h),f(s,p),F(l,s,null),u=!0},p(r,o){(!u||o&2)&&X(h,r[1]);const t={};o&18&&(t.progress=r[1]/r[4]),o&4&&(t.penguin=r[2]),l.$set(t)},i(r){u||(P(l.$$.fragment,r),u=!0)},o(r){H(l.$$.fragment,r),u=!1},d(r){r&&d(s),G(l)}}}function pn(n){let s,e,a,h,p,l,u,r,o;u=new Y({props:{progress:n[0]/n[4],penguin:n[3]}});let t=n[5]&&L(n);return{c(){s=T("div"),e=T("div"),a=T("div"),h=T("span"),p=K(n[0]),l=E(),Q(u.$$.fragment),r=E(),t&&t.c(),this.h()},l(i){s=v(i,"DIV",{class:!0});var g=_(s);e=v(g,"DIV",{class:!0});var m=_(e);a=v(m,"DIV",{class:!0});var y=_(a);h=v(y,"SPAN",{class:!0});var M=_(h);p=Z(M,n[0]),M.forEach(d),y.forEach(d),l=R(m),J(u.$$.fragment,m),m.forEach(d),r=R(g),t&&t.l(g),g.forEach(d),this.h()},h(){c(h,"class","steps svelte-8j4ggv"),c(a,"class","row svelte-8j4ggv"),c(e,"class","section svelte-8j4ggv"),c(s,"class","widget svelte-8j4ggv")},m(i,g){W(i,s,g),f(s,e),f(e,a),f(a,h),f(h,p),f(e,l),F(u,e,null),f(s,r),t&&t.m(s,null),o=!0},p(i,[g]){(!o||g&1)&&X(p,i[0]);const m={};g&17&&(m.progress=i[0]/i[4]),g&8&&(m.penguin=i[3]),u.$set(m),i[5]?t?(t.p(i,g),g&32&&P(t,1)):(t=L(i),t.c(),P(t,1),t.m(s,null)):t&&(rn(),H(t,1,1,()=>{t=null}),on())},i(i){o||(P(u.$$.fragment,i),P(t),o=!0)},o(i){H(u.$$.fragment,i),H(t),o=!1},d(i){i&&d(s),G(u),t&&t.d()}}}function fn(n,s,e){let a,h,p,l;sn(n,ln,i=>e(5,l=i));let{userSteps:u=0}=s,{partnerSteps:r=0}=s,{inputUserPenguin:o="penguin-blue"}=s,{inputPartnerPenguin:t="penguin-pink"}=s;return n.$$set=i=>{"userSteps"in i&&e(0,u=i.userSteps),"partnerSteps"in i&&e(1,r=i.partnerSteps),"inputUserPenguin"in i&&e(6,o=i.inputUserPenguin),"inputPartnerPenguin"in i&&e(7,t=i.inputPartnerPenguin)},n.$$.update=()=>{n.$$.dirty&3&&e(4,a=Math.max(u,r,1e4)),n.$$.dirty&64&&e(3,h=["penguin-blue","penguin-pink","penguin-green","penguin-yellow"].includes(o)?o:void 0),n.$$.dirty&128&&e(2,p=["penguin-blue","penguin-pink","penguin-green","penguin-yellow"].includes(t)?t:void 0)},[u,r,p,h,a,l,o,t]}class _n extends O{constructor(s){super(),U(this,s,fn,pn,N,{userSteps:0,partnerSteps:1,inputUserPenguin:6,inputPartnerPenguin:7})}}export{_n as R,ln as p};
