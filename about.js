const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
tl.fromTo(
    ".intro-para1",
    { opacity: 0 },
    { opacity: 1, duration: 1.5 },
    "-=1.5"
);
tl.fromTo(
    ".intro-para2",
    { opacity: 0 },
    { opacity: 1, duration: 1.5 },
    "-=1.5"
);
tl.fromTo(
    ".frontpage-img",
    { opacity: 0 },
    { opacity: 1, duration: 1.5 },
    "-=1.5"
);
