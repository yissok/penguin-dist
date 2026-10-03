import{s as O,n as q,x as A,o as en,e as sn,b as rn}from"./Dlc_SMu7.js";import{S as U,i as j,d as v,j as h,z as D,a as I,h as m,c as T,m as M,A as z,b as R,e as w,B,s as k,p as G,t as C,f as x,l as X,v as an,w as on,q as F,g as Y,n as Z,r as J,o as K,u as Q}from"./uWuaCGb6.js";import{w as ln,a as N}from"./CXqj6f-3.js";const un=ln(null),cn=`

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
`;function hn(t){let e,n,i,f,d,l,g;return{c(){e=w("div"),n=B("svg"),i=B("path"),d=k(),l=w("img"),this.h()},l(u){e=T(u,"DIV",{class:!0});var r=M(e);n=z(r,"svg",{width:!0,height:!0,viewBox:!0,preserveAspectRatio:!0,class:!0});var o=M(n);i=z(o,"path",{d:!0,fill:!0,opacity:!0,class:!0}),M(i).forEach(v),o.forEach(v),d=R(r),l=T(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(v),this.h()},h(){h(i,"d",t[5]),h(i,"fill",t[7]),h(i,"opacity",f=.4*t[1]),h(i,"class","svelte-3rilnw"),h(n,"width","100%"),h(n,"height",E),h(n,"viewBox",`0 0 ${P} ${E}`),h(n,"preserveAspectRatio","none"),h(n,"class","svelte-3rilnw"),h(l,"class","penguin svelte-3rilnw"),A(l.src,g=`${N}/${t[0]}.png`)||h(l,"src",g),h(l,"alt",""),D(l,"left",`${t[2]*t[4]-42+t[6]}px`),h(e,"class","trail svelte-3rilnw")},m(u,r){I(u,e,r),m(e,n),m(n,i),m(e,d),m(e,l),t[16](e)},p(u,[r]){r&32&&h(i,"d",u[5]),r&128&&h(i,"fill",u[7]),r&2&&f!==(f=.4*u[1])&&h(i,"opacity",f),r&1&&!A(l.src,g=`${N}/${u[0]}.png`)&&h(l,"src",g),r&84&&D(l,"left",`${u[2]*u[4]-42+u[6]}px`)},i:q,o:q,d(u){u&&v(e),t[16](null)}}}const P=320,E=50,V=68;function pn(t){return t*t*t*(t*(t*6-15)+10)}function gn(t,e,n){let i,f,d,l;const g=new Function(`
    ${cn}

    return buildTrail;
    `)(),u={"penguin-blue":"#3f48cc","penguin-pink":"#ffaec9","penguin-green":"#5ecb72","penguin-yellow":"#ffd966"};let{penguin:r="penguin-blue"}=e,{progress:o=0}=e,s=0,c=0,a=V*(.1+c*.25),p=Math.max(a,P*o),b,_=P,H=_/P,S=g(o,P,E),W=S.path;Math.random().toString(36).slice(2),en(()=>{const y=new ResizeObserver(tn=>{n(12,_=tn[0].contentRect.width)});return y.observe(b),()=>y.disconnect()});function nn(y){sn[y?"unshift":"push"](()=>{b=y,n(3,b)})}return t.$$set=y=>{"penguin"in y&&n(0,r=y.penguin),"progress"in y&&n(9,o=y.progress)},t.$$.update=()=>{t.$$.dirty&1&&n(7,i=u[r]??"#ffffff"),t.$$.dirty&512,t.$$.dirty&512&&n(1,s=Math.min(o/.15,1)),t.$$.dirty&2&&n(1,s=s*s*(3-2*s)),t.$$.dirty&512&&n(10,c=Math.min(o/.07,1)),t.$$.dirty&1024&&n(10,c=c*c*c*(c*(c*6-15)+10)),t.$$.dirty&1024&&n(11,a=V*(.1+c*.25)),t.$$.dirty&2560&&n(2,p=Math.max(a,P*o)),t.$$.dirty&9728&&(n(13,S=g(o,P,E)),n(5,W=S.path),n(2,p=S.trailWidth),n(1,s=S.opacity/.4)),t.$$.dirty&4&&n(15,f=p),t.$$.dirty&32768,t.$$.dirty&4096&&n(4,H=_/P),t.$$.dirty&512&&n(14,d=1-pn(Math.min(o/.2,1))),t.$$.dirty&16384&&n(6,l=10*d)},[r,s,p,b,H,W,l,i,g,o,c,a,_,S,d,f,nn]}class $ extends U{constructor(e){super(),j(this,e,gn,hn,O,{buildTrail:8,penguin:0,progress:9})}get buildTrail(){return this.$$.ctx[8]}}function L(t){let e,n,i,f="Partner",d,l,g,u,r,o;return r=new $({props:{progress:t[1]/t[4],penguin:t[2]}}),{c(){e=w("div"),n=w("div"),i=w("span"),i.textContent=f,d=k(),l=w("span"),g=K(t[1]),u=k(),Q(r.$$.fragment),this.h()},l(s){e=T(s,"DIV",{class:!0});var c=M(e);n=T(c,"DIV",{class:!0});var a=M(n);i=T(a,"SPAN",{class:!0,"data-svelte-h":!0}),Y(i)!=="svelte-d5vz7x"&&(i.textContent=f),d=R(a),l=T(a,"SPAN",{class:!0});var p=M(l);g=Z(p,t[1]),p.forEach(v),a.forEach(v),u=R(c),J(r.$$.fragment,c),c.forEach(v),this.h()},h(){h(i,"class","label svelte-195ht1t"),h(l,"class","steps svelte-195ht1t"),h(n,"class","row svelte-195ht1t"),h(e,"class","section svelte-195ht1t")},m(s,c){I(s,e,c),m(e,n),m(n,i),m(n,d),m(n,l),m(l,g),m(e,u),F(r,e,null),o=!0},p(s,c){(!o||c&2)&&X(g,s[1]);const a={};c&18&&(a.progress=s[1]/s[4]),c&4&&(a.penguin=s[2]),r.$set(a)},i(s){o||(x(r.$$.fragment,s),o=!0)},o(s){C(r.$$.fragment,s),o=!1},d(s){s&&v(e),G(r)}}}function fn(t){let e,n,i,f,d="You",l,g,u,r,o,s,c;o=new $({props:{progress:t[0]/t[4],penguin:t[3]}});let a=t[5]&&L(t);return{c(){e=w("div"),n=w("div"),i=w("div"),f=w("span"),f.textContent=d,l=k(),g=w("span"),u=K(t[0]),r=k(),Q(o.$$.fragment),s=k(),a&&a.c(),this.h()},l(p){e=T(p,"DIV",{class:!0});var b=M(e);n=T(b,"DIV",{class:!0});var _=M(n);i=T(_,"DIV",{class:!0});var H=M(i);f=T(H,"SPAN",{class:!0,"data-svelte-h":!0}),Y(f)!=="svelte-xhmtem"&&(f.textContent=d),l=R(H),g=T(H,"SPAN",{class:!0});var S=M(g);u=Z(S,t[0]),S.forEach(v),H.forEach(v),r=R(_),J(o.$$.fragment,_),_.forEach(v),s=R(b),a&&a.l(b),b.forEach(v),this.h()},h(){h(f,"class","label svelte-195ht1t"),h(g,"class","steps svelte-195ht1t"),h(i,"class","row svelte-195ht1t"),h(n,"class","section svelte-195ht1t"),h(e,"class","widget svelte-195ht1t")},m(p,b){I(p,e,b),m(e,n),m(n,i),m(i,f),m(i,l),m(i,g),m(g,u),m(n,r),F(o,n,null),m(e,s),a&&a.m(e,null),c=!0},p(p,[b]){(!c||b&1)&&X(u,p[0]);const _={};b&17&&(_.progress=p[0]/p[4]),b&8&&(_.penguin=p[3]),o.$set(_),p[5]?a?(a.p(p,b),b&32&&x(a,1)):(a=L(p),a.c(),x(a,1),a.m(e,null)):a&&(an(),C(a,1,1,()=>{a=null}),on())},i(p){c||(x(o.$$.fragment,p),x(a),c=!0)},o(p){C(o.$$.fragment,p),C(a),c=!1},d(p){p&&v(e),G(o),a&&a.d()}}}function mn(t,e,n){let i,f,d,l;rn(t,un,s=>n(5,l=s));let{userSteps:g=0}=e,{partnerSteps:u=0}=e,{inputUserPenguin:r="penguin-blue"}=e,{inputPartnerPenguin:o="penguin-pink"}=e;return t.$$set=s=>{"userSteps"in s&&n(0,g=s.userSteps),"partnerSteps"in s&&n(1,u=s.partnerSteps),"inputUserPenguin"in s&&n(6,r=s.inputUserPenguin),"inputPartnerPenguin"in s&&n(7,o=s.inputPartnerPenguin)},t.$$.update=()=>{t.$$.dirty&3&&n(4,i=Math.max(g,u,1e4)),t.$$.dirty&64&&n(3,f=["penguin-blue","penguin-pink","penguin-green","penguin-yellow"].includes(r)?r:void 0),t.$$.dirty&128&&n(2,d=["penguin-blue","penguin-pink","penguin-green","penguin-yellow"].includes(o)?o:void 0)},[g,u,d,f,i,l,r,o]}class vn extends U{constructor(e){super(),j(this,e,mn,fn,O,{userSteps:0,partnerSteps:1,inputUserPenguin:6,inputPartnerPenguin:7})}}export{vn as R,un as p};
