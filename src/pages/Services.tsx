import transition from "../transition";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";
import { useLocation } from "react-router-dom";

type RefKeys =
  | "socialMediaRef"
  | "contentCreationRef"
  | "seoRef"
  | "webRef"
  | "pvRef"
  | "editRef";

const Services = () => {
  const controls = useAnimation();

  const { scrollYProgress } = useScroll();
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const location = useLocation();
  const scrollToRef = location.state?.scrollToRef as RefKeys | undefined;

  const socialMediaRef = useRef<HTMLDivElement>(null);
  const contentCreationRef = useRef<HTMLDivElement>(null);
  const seoRef = useRef<HTMLDivElement>(null);
  const webRef = useRef<HTMLDivElement>(null);
  const pvRef = useRef<HTMLDivElement>(null);
  const editRef = useRef<HTMLDivElement>(null);

  const refs: Record<RefKeys, React.RefObject<HTMLDivElement>> = {
    socialMediaRef,
    contentCreationRef,
    seoRef,
    webRef,
    pvRef,
    editRef,
  };

  useEffect(() => {
    if (scrollToRef && refs[scrollToRef]) {
      refs[scrollToRef].current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToRef, refs]);

  const services = [
    {
      heading: "SOCIAL MEDIA MANAGEMENT",
      subheading: "See our projects",
      imgSrc: "./src/assets/services/1.png",
      scrollToRef: socialMediaRef,
    },
    {
      heading: "CONTENT CREATION",
      subheading: "Our services",
      imgSrc: "./src/assets/services/2.png",
      scrollToRef: contentCreationRef,
    },
    {
      heading: "SEARCH ENGINE OPTIMIZATION",
      subheading: "Why choose us?",
      imgSrc: "./src/assets/services/3.png",
      scrollToRef: seoRef,
    },
    {
      heading: "WEB DESIGN",
      subheading: "Get in touch",
      imgSrc: "./src/assets/services/4.png",
      scrollToRef: webRef,
    },
    {
      heading: "PHOTOGRAPHY/VIDEOGRAPHY",
      subheading: "Get in touch",
      imgSrc: "./src/assets/services/5.png",
      scrollToRef: pvRef,
    },
    {
      heading: "PHOTO/VIDEO EDITING",
      subheading: "Get in touch",
      imgSrc: "./src/assets/services/7.png",
      scrollToRef: editRef,
    },
  ];

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      textShadow: [
        "0px 0px 0px rgba(0,0,0,0)",
        "0px 10px 15px rgba(0,0,0,0.3)",
        "0px 0px 0px rgba(0,0,0,0)",
      ],
      transition: { duration: 2, repeat: Infinity, repeatType: "loop" },
    });
  }, [controls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsButtonVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (socialMediaRef.current) {
      observer.observe(socialMediaRef.current);
    }

    return () => {
      if (socialMediaRef.current) {
        observer.unobserve(socialMediaRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen mx-auto bg-secondary">
      {/*
      <section className="w-full mt-12">
        <div className="px-2 flex flex-col items-center justify-center overflow-hidden text-center font-lemonmilk tracking-tighter text-[calc(10vw)] md:text-[calc(8vw)] lg:text-[calc(6vw)] xl:text-[calc(8vw)] 2xl:text-[calc(6vw)] z-10 text-light">
          <motion.div
            initial="hidden"
            animate="visible"
            className="z-10 flex flex-col items-center justify-center px-2 overflow-hidden font-bold tracking-tighter uppercase"
          >
            <div className="flex flex-row space-x-8">
              <motion.span animate={controls} className="text-light">
                ELEVATE
              </motion.span>
              <motion.span className="text-light">YOUR</motion.span>
            </div>
            <div className="flex flex-row space-x-8">
              <motion.span>ONLINE</motion.span>
              <motion.span>PRESENCE</motion.span>
            </div>
          </motion.div>
        </div>
      </section>

   
      <section className="flex flex-col w-full mt-20 mb-20">
        <div className="grid w-full grid-cols-2 gap-8 px-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 justify-items-center">
          {services.map((service, index) => (
            <DividedBlock
              key={index}
              heading={service.heading}
              subheading={service.subheading}
              imgSrc={service.imgSrc}
              scrollToRef={service.scrollToRef}
            />
          ))}
        </div>
      </section>
*/}

      <section className="flex flex-col w-full">
        <div className="bg-secondary text-light">
          <TextParallaxContent
            imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subheading="Ready to build a powerful social media presence?"
            heading="SOCIAL MEDIA MANAGEMENT"
            scrollToRef={socialMediaRef}
          >
            <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 pb-24 mx-auto md:grid-cols-12">
              <h2 className="col-span-1 text-3xl font-bold md:col-span-4 font-lemonmilk">
                SOCIAL MEDIA MANAGEMENT
              </h2>
              <div className="col-span-1 md:col-span-8">
                <p className="mb-4 text-xl text-light md:text-xl font-josefin">
                  Maximize your brand’s impact on social media with our
                  comprehensive management services, tailored for up to three
                  different platforms. From content creation to engagement, we
                  handle every aspect of your social presence so you can focus
                  on growing your business.
                </p>
                <p className="mb-4 text-xl text-light md:text-2xl font-bold font-alata">
                  What We Offer
                </p>
                <ul className="list-disc ml-8 mb-4 space-y-2 font-josefin">
                  <li>
                    <span className="font-bold">Content Creation:</span> We
                    craft high-quality posts, engaging reels, and dynamic
                    stories that resonate with your audience and keep your brand
                    active and relevant.
                  </li>
                  <li>
                    <span className="font-bold">Ad Campaigns:</span> Our team
                    runs targeted social media ads, designed to increase reach
                    and conversions, while carefully collecting data to refine
                    and optimize results.
                  </li>
                  <li>
                    <span className="font-bold">Follower Engagement:</span> We
                    interact with your followers by responding to comments,
                    messages, and mentions, fostering a stronger connection
                    between your brand and your community.
                  </li>
                  <li>
                    <span className="font-bold">Metrics and Reporting:</span> At
                    the end of each month, we provide in-depth performance
                    reports, giving you clear insights into your social media
                    growth, engagement, and ROI.
                  </li>
                </ul>

                <p className="mb-4 text-xl text-light md:text-2xl font-bold font-alata">
                  Why Our Social Media Management Works
                </p>
                <ul className="list-disc ml-8 space-y-2 font-josefin">
                  <li>
                    <span className="font-bold">Tailored to Your Brand:</span>{" "}
                    Every piece of content we create is customized to match your
                    brand’s voice and aesthetic, helping you build a cohesive
                    and memorable online presence.
                  </li>
                  <li>
                    <span className="font-bold">Data-Driven Strategies:</span>{" "}
                    We leverage detailed metrics to continuously optimize your
                    social media campaigns, ensuring you’re always reaching the
                    right audience.
                  </li>
                  <li>
                    <span className="font-bold">Consistent Growth:</span> With
                    regular engagement and strategic ad placement, we help you
                    grow your follower base and strengthen customer loyalty.
                  </li>
                  <li>
                    <span className="font-bold">End-to-End Management:</span>{" "}
                    From content creation to performance tracking, we handle
                    everything, saving you time and ensuring your social media
                    channels are consistently active and effective.
                  </li>
                </ul>
              </div>
            </div>
          </TextParallaxContent>
          <TextParallaxContent
            imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subheading="Let’s Create Together!"
            heading="CONTENT CREATION"
            scrollToRef={contentCreationRef}
          >
            <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 pb-24 mx-auto md:grid-cols-12">
              <h2 className="col-span-1 text-3xl font-bold md:col-span-4 font-lemonmilk">
                CONTENT CREATION
              </h2>
              <div className="col-span-1 md:col-span-8">
                <p className="mb-4 text-xl text-light md:text-xl font-josefin">
                  Create compelling content that tells your brand’s story and
                  engages your audience. At FrameFlow, we offer a full range of
                  content creation services, from social media posts and videos
                  to blog articles and custom content that fits your unique
                  needs.
                </p>
                <p className="mb-4 text-xl text-light md:text-2xl font-bold font-alata">
                  What We Offer
                </p>
                <ul className="list-disc ml-8 mb-4 space-y-2 font-josefin">
                  <li>
                    <span className="font-bold">Social Media Content:</span>{" "}
                    High-quality posts, reels, and stories crafted to keep your
                    social media platforms vibrant, engaging, and aligned with
                    your brand identity.
                  </li>
                  <li>
                    <span className="font-bold">Video Production:</span>{" "}
                    Eye-catching videos that grab attention, whether for social
                    media, website use, or marketing campaigns. From concept to
                    final cut, we handle it all.
                  </li>
                  <li>
                    <span className="font-bold">Blog Writing:</span>{" "}
                    Professionally written blog posts optimized for SEO,
                    designed to inform, engage, and drive organic traffic to
                    your site.
                  </li>
                  <li>
                    <span className="font-bold">Custom Content:</span> Need
                    something specific? We create any type of content you
                    require to tell your story—whether it’s whitepapers,
                    infographics, newsletters, or more.
                  </li>
                </ul>

                <p className="mb-4 text-xl text-light md:text-2xl font-bold font-alata">
                  Why Our Content Creation Stands Out
                </p>
                <ul className="list-disc ml-8 space-y-2 font-josefin">
                  <li>
                    <span className="font-bold">
                      Brand-Centric Storytelling:
                    </span>{" "}
                    Every piece of content we produce is tailored to reflect
                    your brand’s voice and values, helping you build a
                    consistent and memorable identity.
                  </li>
                  <li>
                    <span className="font-bold">Engagement-Focused:</span>{" "}
                    Whether it’s a blog post, social media reel, or a video
                    campaign, our content is designed to capture attention,
                    drive engagement, and encourage action.
                  </li>
                  <li>
                    <span className="font-bold">SEO-Optimized:</span> Our blog
                    writing and other web content are not only well-written but
                    also optimized for search engines, helping you boost
                    visibility and organic traffic.
                  </li>
                  <li>
                    <span className="font-bold">Multimedia Expertise:</span>{" "}
                    From written content to dynamic visuals, we cover all types
                    of media, ensuring your brand gets the exposure it deserves
                    across every platform.
                  </li>
                  <li>
                    <span className="font-bold">Versatile & Flexible:</span> We
                    adapt to your specific needs, creating content that fits
                    seamlessly into your broader marketing strategy, no matter
                    the format or platform.
                  </li>
                </ul>
              </div>
            </div>
          </TextParallaxContent>
          <TextParallaxContent
            imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subheading="Get Found Online!"
            heading="SEARCH ENGINE OPTIMIZATION"
            scrollToRef={seoRef}
          >
            <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 pb-24 mx-auto md:grid-cols-12">
              <h2 className="col-span-1 text-3xl font-bold md:col-span-4 font-lemonmilk">
                SEARCH ENGINE OPTIMIZATION (SEO)
              </h2>
              <div className="col-span-1 md:col-span-8">
                <p className="mb-4 text-xl text-light md:text-xl font-josefin">
                  Rank higher, reach further, and grow faster with FrameFlow’s
                  comprehensive SEO services. Our proven strategies help your
                  business increase organic visibility, drive qualified traffic,
                  and achieve measurable results on search engines like Google.
                </p>
                <p className="mb-4 text-xl text-light md:text-2xl font-bold font-alata">
                  What We Offer
                </p>
                <ul className="list-disc ml-8 mb-4 space-y-2 font-josefin">
                  <li>
                    <span className="font-bold">
                      Keyword Research & Strategy:
                    </span>{" "}
                    We conduct in-depth keyword analysis to identify the terms
                    and phrases your target audience is searching for, ensuring
                    your site ranks for the right queries.
                  </li>
                  <li>
                    <span className="font-bold">On-Page SEO:</span> From
                    optimizing meta tags and headings to improving your
                    content’s structure, we ensure your website is fully
                    optimized for search engines and user experience.
                  </li>
                  <li>
                    <span className="font-bold">Technical SEO:</span> We audit
                    your website’s backend, fixing any issues that might be
                    hindering your rankings, such as site speed,
                    mobile-friendliness, and indexing errors.
                  </li>
                  <li>
                    <span className="font-bold">Content Optimization:</span> We
                    enhance your existing content with strategic keyword
                    placement, improved readability, and engaging calls to
                    action that boost your site’s relevance and authority.
                  </li>
                  <li>
                    <span className="font-bold">Local SEO:</span> For businesses
                    with a physical presence, we optimize your local listings
                    and improve your visibility in local searches, driving more
                    foot traffic and local leads.
                  </li>
                  <li>
                    <span className="font-bold">
                      Performance Tracking & Reporting:
                    </span>{" "}
                    Monthly reports that provide a clear picture of your
                    website’s performance, including ranking improvements,
                    traffic growth, and other key metrics.
                  </li>
                </ul>

                <p className="mb-4 text-xl text-light md:text-2xl font-bold font-alata">
                  Why Our SEO Drives Results
                </p>
                <ul className="list-disc ml-8 space-y-2 font-josefin">
                  <li>
                    <span className="font-bold">Data-Driven Strategy:</span> Our
                    SEO campaigns are powered by data and analytics, ensuring we
                    target the right keywords and refine your strategy over time
                    for continuous improvement.
                  </li>
                  <li>
                    <span className="font-bold">
                      Improved Rankings & Traffic:
                    </span>{" "}
                    By focusing on both on-page and technical SEO, we help your
                    site climb the search rankings and attract more
                    high-quality, organic traffic.
                  </li>
                  <li>
                    <span className="font-bold">Enhanced User Experience:</span>{" "}
                    SEO isn’t just for search engines—it’s also about improving
                    your visitors’ experience. We ensure your site is fast,
                    mobile-friendly, and easy to navigate.
                  </li>
                  <li>
                    <span className="font-bold">Long-Term Growth:</span> SEO is
                    a long-term investment, and we build strategies designed to
                    deliver sustained growth, helping your business succeed well
                    into the future.
                  </li>
                  <li>
                    <span className="font-bold">Full Transparency:</span> You’ll
                    receive detailed monthly reports that break down what’s
                    working, how your rankings have improved, and where further
                    opportunities lie.
                  </li>
                </ul>
              </div>
            </div>
          </TextParallaxContent>
          <TextParallaxContent
            imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subheading="Ready to Build a Website That Drives Results?"
            heading="WEB DESIGN"
            scrollToRef={webRef}
          >
            <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 pb-24 mx-auto md:grid-cols-12">
              <h2 className="col-span-1 text-3xl font-bold md:col-span-4 font-lemonmilk">
                WEB DESIGN
              </h2>
              <div className="col-span-1 md:col-span-8">
                <p className="mb-4 text-xl text-light md:text-xl font-josefin">
                  Elevate your online presence with a custom-designed website
                  that’s visually stunning, fully functional, and optimized for
                  growth. At FrameFlow, we build websites that not only look
                  great but also drive results. Whether you're looking for a
                  WordPress site, a quick setup on Wix, or a custom-coded
                  solution, we've got the expertise to make it happen.
                </p>
                <p className="mb-4 text-xl text-light md:text-2xl font-bold font-alata">
                  What We Offer
                </p>
                <ul className="list-disc ml-8 mb-4 space-y-2 font-josefin">
                  <li>
                    <span className="font-bold">Platform Versatility:</span> We
                    work across popular website platforms like WordPress and
                    Wix, or can create a fully custom-coded site tailored to
                    your unique business needs.
                  </li>
                  <li>
                    <span className="font-bold">Full Website Build:</span> Every
                    website includes at least 7 professionally designed pages,
                    from Home to Contact, as well as an SEO-friendly blog that
                    helps you attract and engage visitors.
                  </li>
                  <li>
                    <span className="font-bold">Brand Integration:</span> We
                    design websites that reflect your brand’s identity, choosing
                    fonts, colors, and layouts that align with your existing
                    branding. If you don’t have a brand identity in place, we’ll
                    help you develop a simple yet impactful one to ensure your
                    site is cohesive and professional.
                  </li>
                  <li>
                    <span className="font-bold">SEO-Friendly Design:</span> Our
                    sites are built with search engines in mind. From structured
                    content to fast loading speeds, we ensure your website is
                    optimized to rank higher and attract more organic traffic.
                  </li>
                  <li>
                    <span className="font-bold">
                      Responsive & Mobile-Optimized:
                    </span>{" "}
                    Your website will look great and function seamlessly on any
                    device—whether desktop, tablet, or smartphone—providing a
                    consistent user experience for all visitors.
                  </li>
                </ul>

                <p className="mb-4 text-xl text-light md:text-2xl font-bold font-alata">
                  Why Our Web Design Stands Out
                </p>
                <ul className="list-disc ml-8 space-y-2 font-josefin">
                  <li>
                    <span className="font-bold">
                      Custom, Client-Centered Approach:
                    </span>{" "}
                    Every website we build is tailored specifically to your
                    business goals and audience. We ensure your website not only
                    looks great but also supports your broader marketing
                    objectives.
                  </li>
                  <li>
                    <span className="font-bold">
                      SEO Integration from the Start:
                    </span>{" "}
                    Unlike many web design services, we prioritize SEO from the
                    beginning, ensuring that your site’s structure, content, and
                    technical elements are optimized for search engines.
                  </li>
                  <li>
                    <span className="font-bold">
                      Professional & Polished Branding:
                    </span>{" "}
                    If your brand identity is already established, we’ll
                    integrate it seamlessly into your website. If not, we’ll
                    create a simple brand style guide to ensure your website and
                    future marketing materials have a cohesive look.
                  </li>
                  <li>
                    <span className="font-bold">Scalable Solutions:</span>{" "}
                    Whether you need a basic site today or plan to expand in the
                    future, we design websites that can grow with your business,
                    ensuring your online presence evolves as your company does.
                  </li>
                </ul>
              </div>
            </div>
          </TextParallaxContent>
          <TextParallaxContent
            imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subheading="Let’s Capture Your Vision!"
            heading="PHOTOGRAPGY / VIDEOGRAPHY"
            scrollToRef={pvRef}
          >
            <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 pb-24 mx-auto md:grid-cols-12">
              <h2 className="col-span-1 text-3xl font-bold md:col-span-4 font-lemonmilk">
                PHOTOGRAPGY / VIDEOGRAPHY
              </h2>
              <div className="col-span-1 md:col-span-8">
                <p className="mb-4 text-xl text-light md:text-xl font-josefin">
                  Bring your brand to life with stunning photography and
                  high-quality videography that tells your story, engages your
                  audience, and leaves a lasting impression. At FrameFlow, we
                  offer professional visual content tailored to your business
                  needs—whether it’s for your website, social media, or
                  marketing campaigns.
                </p>
                <p className="mb-4 text-xl text-light md:text-2xl font-bold font-alata">
                  What We Offer
                </p>
                <ul className="list-disc ml-8 mb-4 space-y-2 font-josefin">
                  <li>
                    <span className="font-bold">Brand Photography:</span>{" "}
                    Professional photos that capture the essence of your brand,
                    from product shots to team portraits. Perfect for websites,
                    social media, and promotional materials.
                  </li>
                  <li>
                    <span className="font-bold">Corporate Videography:</span>{" "}
                    High-quality videos that showcase your products, services,
                    or company culture. Whether you need a promotional video,
                    explainer video, or event coverage, we provide engaging
                    content that connects with your audience.
                  </li>
                  <li>
                    <span className="font-bold">Social Media Content:</span>{" "}
                    Short-form videos and eye-catching photography designed
                    specifically for social platforms like Instagram, Facebook,
                    and LinkedIn. Reels, stories, and other dynamic content that
                    grabs attention and enhances your social presence.
                  </li>
                  <li>
                    <span className="font-bold">Event Coverage:</span> Capture
                    the moments that matter most with full-service event
                    photography and videography for conferences, launches, or
                    corporate gatherings, ensuring you have professional visuals
                    to share and promote your business.
                  </li>
                  <li>
                    <span className="font-bold">
                      Post-Production & Editing:
                    </span>{" "}
                    After shooting, we provide professional editing services to
                    ensure every photo and video is polished, on-brand, and
                    ready to use across any platform.
                  </li>
                </ul>

                <p className="mb-4 text-xl text-light md:text-2xl font-bold font-alata">
                  Why Our Photography & Videography Stand Out
                </p>
                <ul className="list-disc ml-8 space-y-2 font-josefin">
                  <li>
                    <span className="font-bold">Brand-Focused Visuals:</span> We
                    don’t just shoot—we work with you to understand your brand’s
                    identity, goals, and audience, ensuring the final visuals
                    align perfectly with your messaging and aesthetic.
                  </li>
                  <li>
                    <span className="font-bold">High-Impact Content:</span> Our
                    visuals are designed to engage and convert. Whether through
                    a compelling product video or a captivating photo series, we
                    create content that not only looks great but also drives
                    action.
                  </li>
                  <li>
                    <span className="font-bold">
                      Versatility Across Platforms:
                    </span>{" "}
                    From your website to your social media channels, we create
                    adaptable visual content that can be used across a variety
                    of platforms, giving you maximum reach and consistency.
                  </li>
                  <li>
                    <span className="font-bold">
                      Storytelling Through Video:
                    </span>{" "}
                    Video is one of the most powerful tools for storytelling. We
                    produce dynamic, high-quality videos that capture attention,
                    build emotional connections, and showcase your brand’s
                    unique story.
                  </li>
                  <li>
                    <span className="font-bold">Professional Editing:</span> Our
                    post-production process ensures your final content is
                    professional, on-brand, and ready to make an impact, whether
                    it’s a high-res image for a billboard or a sleek video for
                    Instagram.
                  </li>
                </ul>
              </div>
            </div>
          </TextParallaxContent>
          <TextParallaxContent
            imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subheading="Ready to Elevate Your Visual Content?"
            heading="PHOTO / VIDEO EDITING"
            scrollToRef={editRef}
          >
            <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 pb-24 mx-auto md:grid-cols-12">
              <h2 className="col-span-1 text-3xl font-bold md:col-span-4 font-lemonmilk">
                PHOTO / VIDEO EDITING
              </h2>
              <div className="col-span-1 md:col-span-8">
                <p className="mb-4 text-xl text-light md:text-xl font-josefin">
                  Transform your raw footage and images into polished,
                  professional content that amplifies your brand’s message. At
                  FrameFlow, our expert editing team ensures that every video
                  and photo is crafted to perfection, aligning with your brand’s
                  vision and ready to captivate your audience.
                </p>
                <p className="mb-4 text-xl text-light md:text-2xl font-bold font-alata">
                  What We Offer
                </p>
                <ul className="list-disc ml-8 mb-4 space-y-2 font-josefin">
                  <li>
                    <span className="font-bold">
                      Professional Video Editing:
                    </span>{" "}
                    We edit your raw video footage into a cohesive, high-quality
                    production. From cutting scenes and adding transitions to
                    integrating soundtracks and special effects, we deliver
                    engaging videos that meet your goals.
                  </li>
                  <li>
                    <span className="font-bold">
                      Photo Retouching & Enhancement:
                    </span>{" "}
                    Whether it’s product photos or event shots, we perfect every
                    image with professional retouching. We adjust lighting,
                    color balance, and clarity to ensure your photos look
                    flawless and on-brand.
                  </li>
                  <li>
                    <span className="font-bold">Color Grading:</span> We enhance
                    your videos and photos with color grading that sets the
                    right mood and tone, ensuring the visuals align with your
                    brand identity.
                  </li>
                  <li>
                    <span className="font-bold">
                      Custom Graphics & Animations:
                    </span>{" "}
                    Need to make your content stand out even more? We add custom
                    graphics, text overlays, and animations to your videos to
                    enhance storytelling and engagement.
                  </li>
                  <li>
                    <span className="font-bold">Audio Enhancement:</span> Poor
                    audio quality can ruin an otherwise great video. We clean up
                    and enhance audio tracks, syncing music, dialogue, or
                    voiceovers to ensure crisp and clear sound.
                  </li>
                  <li>
                    <span className="font-bold">Format Optimization:</span>{" "}
                    Whether your content is destined for social media, your
                    website, or a presentation, we optimize the final product
                    for the correct format, ensuring seamless delivery across
                    platforms.
                  </li>
                </ul>

                <p className="mb-4 text-xl text-light md:text-2xl font-bold font-alata">
                  Why Our Editing Stands Out
                </p>
                <ul className="list-disc ml-8 space-y-2 font-josefin">
                  <li>
                    <span className="font-bold">
                      Polished, Professional Results:
                    </span>{" "}
                    We take your raw footage or images and turn them into
                    refined, high-quality content that represents your brand in
                    the best possible light.
                  </li>
                  <li>
                    <span className="font-bold">Attention to Detail:</span>{" "}
                    Every frame and pixel matters. We meticulously fine-tune
                    your videos and photos to ensure that they are visually
                    stunning, engaging, and on-brand.
                  </li>
                  <li>
                    <span className="font-bold">Story-Driven Editing:</span> Our
                    approach to video editing is rooted in storytelling. We
                    craft your footage into a compelling narrative that
                    resonates with your audience and drives action.
                  </li>
                  <li>
                    <span className="font-bold">Tailored to Your Needs:</span>{" "}
                    Whether it’s a short social media clip, a full-length
                    promotional video, or a photo series for your website, we
                    adapt our editing process to suit your specific goals and
                    platform requirements.
                  </li>
                  <li>
                    <span className="font-bold">
                      Fast Turnaround & Revisions:
                    </span>{" "}
                    We work efficiently to deliver your edited content on time
                    and offer revision rounds to ensure the final product
                    matches your vision perfectly.
                  </li>
                </ul>
              </div>
            </div>
          </TextParallaxContent>
        </div>
      </section>

      <motion.div
        className="z-10 progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {isButtonVisible && (
        <motion.div
          className="fixed z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full cursor-pointer bottom-4 right-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <GoArrowUp className="transform text-secondary" />
        </motion.div>
      )}
    </div>
  );
};

interface Service {
  heading: string;
  subheading: string;
  imgSrc: string;
  scrollToRef: React.RefObject<HTMLDivElement>;
}

const DividedBlock: React.FC<Service> = ({
  heading,
  subheading,
  imgSrc,
  scrollToRef,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="flex flex-col w-[calc(45vw)] h-[calc(45vw)] sm:w-[calc(45vw)] sm:h-[calc(45vw)] md:w-[calc(30vw)] md:h-[calc(30vw)] lg:w-[calc(30vw)] lg:h-[calc(30vw)] xl:w-[calc(30vw)] xl:h-[calc(30vw)] "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-center flex-1 w-full bg-black text-light">
          <h1 className="w-full items-center justify-center flex h-full max-[1024px]:text-[calc(1.5vw)] min-[1024px]:text-[calc(1.5vw)] font-lemonmilk">
            {heading}
          </h1>
        </div>
        <div className="flex flex-row w-full h-1/2">
          <div className="flex w-1/2">
            <motion.img
              src={imgSrc}
              className="absolute inset-0 w-full h-full"
              initial={{ scale: 1, x: 0, y: 0 }}
              animate={
                isHovered
                  ? { scale: 0.5, x: "-25%", y: "25%" }
                  : { scale: 1, x: 0, y: 0 }
              }
              transition={{ duration: 0.3, ease: "easeIn" }}
              alt="Background"
            />
          </div>
          <div className="flex flex-row items-center justify-center w-1/2 text-black bg-light">
            <button
              className="flex flex-row items-center max-[1024px]:text-[calc(2vw)] min-[1024px]:text-[calc(1.5vw)] justify-center w-full h-full font-alata"
              onClick={handleClick}
            >
              MORE <GoArrowUpRight className="font-bold" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
  scrollToRef: React.RefObject<HTMLDivElement>;
}

const TextParallaxContent: React.FC<TextParallaxContentProps> = ({
  imgUrl,
  subheading,
  heading,
  children,
  scrollToRef,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={scrollToRef}>
      <div className="relative h-[150vh] font-lemonmilk ">
        <StickyImage imgUrl={imgUrl} />
        <div ref={overlayRef}>
          <OverlayCopy heading={heading} subheading={subheading} />
        </div>
      </div>
      <div ref={childrenRef}>{children}</div>
    </div>
  );
};

interface StickyImageProps {
  imgUrl: string;
}

const StickyImage: React.FC<StickyImageProps> = ({ imgUrl }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh`,
        top: 0,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-2xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const OverlayCopy: React.FC<OverlayCopyProps> = ({ subheading, heading }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-white"
    >
      <p className="mb-2 text-xl text-center md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-4xl font-bold text-center md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit
) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!targetRef.current) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [callback, options]);

  return targetRef;
};

export default transition(Services);
