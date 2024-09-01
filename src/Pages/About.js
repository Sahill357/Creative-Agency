import React from 'react'

export const About = () => {
  return (
     <>
      


      <div className="page-wrapper">
      <section className="section">
      <div className="container arrows-scene">
        <div className="about-scene-content" data-w-id="9df152d7-821b-bdd8-bb77-0420b832aae6">
          <div className="about-scene-wrapper">
            <div className="about-text-wrapper">
              <div
                className="paragraph-16px medium"
                data-w-id="333f171e-3c79-8fdb-7b5b-46524d513053"
                style={{ opacity: 1 }}
              >
                Vivi Matisse
              </div>
              <p
                className="paragraph-14px width-215px grey"
                data-w-id="d92406f7-7e1d-8baf-f952-ac47eb7f2b58"
                style={{ opacity: 1 }}
              >
                His philosophy centers around the perfect blend of artistry and technology,
                resulting in websites that not...
              </p>
            </div>
            <div className="about-arrow--wrapper">
              {[
                { id: "6824a257-ae08-e4ba-c4de-75e48d283800", text: "Art<br />Director" },
                { id: "fcea31c7-4d54-4d3f-9e5a-678e636bc8e3", text: "Brand<br />Designer" },
                { id: "40170e9d-069d-46a9-a1f3-2ce851fa9976", text: "Senior<br />Designer", rotated: true },
                { id: "1ff024da-ff5d-7a47-6902-ffc642a7c777", text: "3D<br />Designer", rotated: true },
                { id: "f31bffd9-fc88-2afe-acc6-5caaea0d0978", text: "Product<br />Designer" },
                { id: "e11bc942-1ce2-346d-2fe0-7c898a063a52", text: "Motion<br />Designer" },
                { id: "741c74cc-83cf-279e-e102-17aae03e967b", text: "Creative<br />Designer" },
                { id: "5b90617e-1ae3-bf84-4458-6ced18347967", text: "Coffee<br />Lover", rotated: true },
                { id: "9185532b-5e06-7fe8-4c30-8db0dfabe01f", text: "System<br />Designer", rotated: true },
              ].map((item, index) => (
                <div key={index} className={`about-arrow-wrapper ${index + 1}`}>
                  <img
                    src="https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b76b_Arrow%20SVG.svg"
                    loading="lazy"
                    style={{ opacity: 1 }}
                    data-w-id={item.id}
                    alt="Image"
                    className={`about-arrow-image ${item.rotated ? "rotated" : ""}`}
                  />
                  <div
                    className={`paragraph-14px arrow-text ${item.rotated ? "left-align" : ""}`}
                    data-w-id={item.id + 1}
                    style={{ opacity: 1 }}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="about-marquee" data-w-id="afda3429-d354-66e3-c824-e95849b4f9be">
            <div className="about-marquee-content">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="about-marquee-wrapper"
                  style={{
                    transform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  }}
                >
                  <div className="heading-mask moving-text">
                    {[...Array(2)].map((_, j) => (
                      <h1
                        key={j}
                        className="h1-heading no-wrap"
                        data-w-id={`17b4fed3-d72b-9bbc-da1f-dacbcc6818e${5 + j}`}
                        style={{ opacity: 1 }}
                      >
                        Industry Leader
                      </h1>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="section">
  <div className="container">
    <div
      data-w-id="fe2ef397-6edd-b38b-3947-3c6f879f1ec4"
      className="about-composition"
    >
      <img
        src="https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b74b_Rectangle%2040138.png"
        alt="Image"
        width="175"
        className="about-parallax-image _2"
      />
      <img
        src="https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b782_Rectangle%2040434.jpg"
        alt="Image"
        width="164"
        className="about-parallax-image _1"
      />
      <div
        data-w-id="4d3a2601-5ba2-6d64-ca80-88d4e4e063e6"
        className="about-writing-text"
      >
        <div className="about-writing-inner">
          <h5
            data-w-id="e365e970-c8d1-2b44-5d00-5e0fe943b47f"
            className="about-writing-heading-absolute"
          >
            Dive into Lumo and witness the brilliance of eco-
          </h5>
          <h5 className="about-writing-heading">
            Dive into Lumo and witness the brilliance of eco-
          </h5>
        </div>
        <div className="about-writing-inner">
          <h5
            data-w-id="d4541782-2198-60df-3b88-b987463a8332"
            className="about-writing-heading-absolute"
          >
            conscious technology. Join us in shaping a digital
          </h5>
          <h5 className="about-writing-heading">
            conscious technology. Join us in shaping a digital
          </h5>
        </div>
        <div className="about-writing-inner">
          <h5
            data-w-id="43675fa1-6b4d-7ad7-e4c1-886d2dd46b10"
            className="about-writing-heading-absolute"
          >
            landscape where nature and
          </h5>
          <h5 className="about-writing-heading">
            landscape where nature and
          </h5>
        </div>
      </div>
      <img
        src="https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b781_Rectangle%2040435.jpg"
        alt="Image"
        width="152"
        className="about-parallax-image _3"
      />
    </div>
  </div>
</section>



<section className="section no-overflow">
  <div
    data-w-id="0371d0f2-da64-16bc-7c8d-e2dfe0d8b2d8"
    className="container sticky"
  >
    <div className="circle-content">
      <div
        data-w-id="887bd98e-9580-1215-7db7-c0f055d87734"
        className="container knowledge-corner"
      >
        <div className="about-knowledge-content">
          <div className="about-knowledge-wrapper mb">
            <div className="heading-mask">
              <div
                style={{
                  transform:
                    "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="paragraph-14px semibold"
              >
                SERVICES
              </div>
            </div>
            <div className="heading-mask">
              <div
                style={{
                  transform:
                    "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="paragraph-14px"
              >
                IT’S ALL ABOUT RESULTS
              </div>
            </div>
          </div>
          <div className="about-knowledge-big-wrapper">
            <div className="heading-mask mb">
              <div
                style={{
                  transform:
                    "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="paragraph-14px"
              >
                MY HERITAGE
              </div>
            </div>
            <div className="heading-mask">
              <h1
                style={{
                  transform:
                    "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="ak-heading hk-1"
              >
                Knowledge
                <br />
              </h1>
            </div>
            <div className="heading-mask">
              <h1
                style={{
                  transform:
                    "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="ak-heading hk-2"
              >
                corner
                <br />
              </h1>
            </div>
          </div>
          <div className="about-knowledge-wrapper">
            <div className="heading-mask">
              <div className="paragraph-14px semibold right-align">vivi</div>
            </div>
            <div className="heading-mask">
              <div
                style={{
                  transform:
                    "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="paragraph-14px"
              >
                matisse
              </div>
            </div>
          </div>
          <img
            src="https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%403-1728x991%20(2).png"
            alt="Image"
            sizes="25vw"
            srcSet="
              https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%25403-1728x991%2520(2)-p-500.png   500w,
              https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%25403-1728x991%2520(2)-p-800.png   800w,
              https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%25403-1728x991%2520(2)-p-1080.png 1080w,
              https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%25403-1728x991%2520(2)-p-1600.png 1600w,
              https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%403-1728x991%20(2).png            2102w
            "
            className="knowledge-content-image _1"
          />
          <img
            src="https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b775_Footer%403-1728x991.png"
            alt="Image"
            sizes="25vw"
            srcSet="
              https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b775_Footer%25403-1728x991-p-500.png   500w,
              https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b775_Footer%25403-1728x991-p-800.png   800w,
              https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b775_Footer%25403-1728x991-p-1080.png 1080w,
              https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b775_Footer%403-1728x991.png          1652w
            "
            className="knowledge-content-image _2"
          />
        </div>
      </div>
      <div className="circle-inner"></div>
      <div className="circle-wrapper _1">
        <div>
          MK
          <br />
          CAMPG
        </div>
      </div>
      <div className="circle-wrapper _2">
        <div>
          CONTENT
          <br />
          STRATEGY
        </div>
      </div>
      <div className="circle-wrapper _3">
        <div>
          UI/UX
          <br />
          DESIGNER
        </div>
      </div>
      <div className="circle-wrapper _4">
        <div>
          WEBSITE
          <br />
          DESIGN
        </div>
      </div>
      <div className="circle-wrapper _5">
        <div>
          BRAND
          <br />
          GUIDLINES
        </div>
      </div>
      <div className="circle-wrapper _6">
        <div>
          INTERFACE
          <br />
          DESIGN
        </div>
      </div>
      <div className="circle-wrapper _7">
        <div>DESIGN</div>
      </div>
      <div className="circle-wrapper _8">
        <div>
          MOTION
          <br />
          DESIGN
        </div>
      </div>
      <div className="circle-wrapper _9">
        <div>
          SHOP
          <br />
          CREATION
        </div>
      </div>
      <div className="circle-wrapper _10">
        <div>
          ART
          <br />
          DIRECTION
        </div>
      </div>
    </div>
  </div>
</section>



<section className="section testimonials">
  <div
    data-w-id="29566244-d9e6-8019-d2dd-c44ed36fa350"
    className="container testimonial-heading"
  >
    <div
      data-w-id="25e64abd-22e9-4914-cb2d-bb44f87b4e35"
      className="testimonial-heading-wrapper"
    >
      <img
        src="https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b771_Footer%403-1728x991%20(1).png"
        alt="Image"
        sizes="(max-width: 479px) 71vw, (max-width: 767px) 250px, (max-width: 991px) 300px, 400px"
        srcSet="
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b771_Footer%25403-1728x991%2520(1)-p-500.png 500w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b771_Footer%25403-1728x991%2520(1)-p-800.png 800w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b771_Footer%25403-1728x991%2520(1)-p-1080.png 1080w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b771_Footer%403-1728x991%20(1).png 1296w
        "
        className="testimonial-heading-image _1"
      />
      <img
        src="https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%403-1728x991%20(2).png"
        alt="Image"
        sizes="(max-width: 479px) 71vw, (max-width: 767px) 250px, (max-width: 991px) 300px, 400px"
        srcSet="
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%25403-1728x991%2520(2)-p-500.png 500w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%25403-1728x991%2520(2)-p-800.png 800w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%25403-1728x991%2520(2)-p-1080.png 1080w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%25403-1728x991%2520(2)-p-1600.png 1600w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%403-1728x991%20(2).png 2102w
        "
        className="testimonial-heading-image _2"
      />
      <div className="testimonial-heading-top">
        <div className="testimonial-heading-inner">
          <div className="heading-mask">
            <div
              style={{
                transform:
                  "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className="paragraph-14px semibold"
            >
              LUMO
            </div>
          </div>
          <div className="heading-mask">
            <div
              style={{
                transform:
                  "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className="paragraph-14px"
            >
              TECHNOLOGIES
            </div>
          </div>
        </div>
        <div className="testimonial-heading-inner">
          <div className="heading-mask">
            <div
              style={{
                transform:
                  "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className="paragraph-14px semibold"
            >
              LUMO
            </div>
          </div>
          <div className="heading-mask">
            <div
              style={{
                transform:
                  "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className="paragraph-14px"
            >
              TECHNOLOGIES
            </div>
          </div>
        </div>
        <div className="testimonial-heading-inner last">
          <div className="heading-mask">
            <div
              style={{
                transform:
                  "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className="paragraph-14px semibold"
            >
              LUMO
            </div>
          </div>
          <div className="heading-mask">
            <div
              style={{
                transform:
                  "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className="paragraph-14px"
            >
              TECHNOLOGIES
            </div>
          </div>
        </div>
      </div>
      <div className="heading-mask">
        <h1
          style={{
            transform:
              "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
          className="h1-heading hm-2"
        >
          More than
          <br />
        </h1>
      </div>
      <div className="heading-mask">
        <h1
          style={{
            transform:
              "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
          className="h1-heading hm-2"
        >
          friends
          <br />
        </h1>
      </div>
    </div>
  </div>
  <div className="about-testimonials">
    <div
      data-w-id="fd32ccc3-8448-ff08-6ba8-46306eecec97"
      className="testimonials-content"
    >
      <div className="space-wrapper">
        <div className="space-inner">
          <div className="paragraph-16px">Service Provided</div>
          <div className="paragraph-16px grey">Logo Design</div>
          <div className="paragraph-16px grey">Branding</div>
          <div className="paragraph-16px grey">Corporate Identity</div>
          <div className="paragraph-16px grey">Pitch Deck</div>
        </div>
      </div>
      <div className="testimonial-wrapper">
        <div className="circle-button _1"></div>
        <div className="circle-button"></div>
        <div className="testimonial-bubble">
          <div className="paragraph-18px black">VL</div>
        </div>
        <div className="paragraph-16px">Vladutt Alupau</div>
        <div className="testimonial-position-wrapper">
          <div className="paragraph-16px grey">Founder</div>
          <div className="bullet-divider"></div>
          <div className="paragraph-16px grey">Pepco Company</div>
        </div>
        <div style={{ height: "0px" }} className="testimonial">
          <p className="paragraph-25px margin">
            “Immersive IBC was born from a visionary&#x27;s dream in 2003, a
            time when the digital landscape was in its infancy. Founded on the
            principle of merging creativity with technology, our journey began
            with a small team passionate about translating ideas into
            captivating digital experiences.”
          </p>
        </div>
      </div>
    </div>
    <div className="list-divider"></div>
    <div
      data-w-id="2a46cf31-a9f8-e593-f980-096af21d114b"
      className="testimonials-content"
    >
      <div className="space-wrapper">
        <div className="space-inner">
          <div className="paragraph-16px">Service Provided</div>
          <div className="paragraph-16px grey">Logo Design</div>
          <div className="paragraph-16px grey">Branding</div>
          <div className="paragraph-16px grey">Corporate Identity</div>
          <div className="paragraph-16px grey">Pitch Deck</div>
        </div>
      </div>
      <div className="testimonial-wrapper">
        <div className="circle-button _1"></div>
        <div className="circle-button"></div>
        <div className="testimonial-bubble">
          <div className="paragraph-18px black">SV</div>
        </div>
        <div className="paragraph-16px">Sebastian Vacar</div>
        <div className="testimonial-position-wrapper">
          <div className="paragraph-16px grey">Founder</div>
          <div className="bullet-divider"></div>
          <div className="paragraph-16px grey">Sebiad Company</div>
        </div>
        <div style={{ height: "0px" }} className="testimonial">
          <p className="paragraph-25px margin">
            “Immersive IBC was born from a visionary&#x27;s dream in 2003, a
            time when the digital landscape was in its infancy. Founded on the
            principle of merging creativity with technology, our journey began
            with a small team passionate about translating ideas into
            captivating digital experiences.”
          </p>
        </div>
      </div>
    </div>
    <div className="list-divider"></div>
    <div
      data-w-id="dece7cd4-1802-7957-bfcf-9d18dee3735b"
      className="testimonials-content"
    >
      <div className="space-wrapper">
        <div className="space-inner">
          <div className="paragraph-16px">Service Provided</div>
          <div className="paragraph-16px grey">Logo Design</div>
          <div className="paragraph-16px grey">Branding</div>
          <div className="paragraph-16px grey">Corporate Identity</div>
          <div className="paragraph-16px grey">Pitch Deck</div>
        </div>
      </div>
      <div className="testimonial-wrapper">
        <div className="circle-button _1"></div>
        <div className="circle-button"></div>
        <div className="testimonial-bubble">
          <div className="paragraph-18px black">RS</div>
        </div>
        <div className="paragraph-16px">Radison Segrado</div>
        <div className="testimonial-position-wrapper">
          <div className="paragraph-16px grey">Manager</div>
          <div className="bullet-divider"></div>
          <div className="paragraph-16px grey">Darkan Construct Company</div>
        </div>
        <div style={{ height: "0px" }} className="testimonial">
          <p className="paragraph-25px margin">
            “Immersive IBC was born from a visionary&#x27;s dream in 2003, a
            time when the digital landscape was in its infancy. Founded on the
            principle of merging creativity with technology, our journey began
            with a small team passionate about translating ideas into
            captivating digital experiences.”
          </p>
        </div>
      </div>
    </div>
    <div className="list-divider"></div>
    <div
      data-w-id="1a35633d-1f21-e9ed-ebe9-24afbbe10be7"
      className="testimonials-content"
    >
      <div className="space-wrapper">
        <div className="space-inner">
          <div className="paragraph-16px">Service Provided</div>
          <div className="paragraph-16px grey">Logo Design</div>
          <div className="paragraph-16px grey">Branding</div>
          <div className="paragraph-16px grey">Corporate Identity</div>
          <div className="paragraph-16px grey">Pitch Deck</div>
        </div>
      </div>
      <div className="testimonial-wrapper">
        <div className="circle-button _1"></div>
        <div className="circle-button"></div>
        <div className="testimonial-bubble">
          <div className="paragraph-18px black">RS</div>
        </div>
        <div className="paragraph-16px">Morris Bakembauer</div>
        <div className="testimonial-position-wrapper">
          <div className="paragraph-16px grey">Marketing Director</div>
          <div className="bullet-divider"></div>
          <div className="paragraph-16px grey">Yolo Technology</div>
        </div>
        <div style={{ height: "0px" }} className="testimonial">
          <p className="paragraph-25px margin">
            “Immersive IBC was born from a visionary&#x27;s dream in 2003, a
            time when the digital landscape was in its infancy. Founded on the
            principle of merging creativity with technology, our journey began
            with a small team passionate about translating ideas into
            captivating digital experiences.”
          </p>
        </div>
      </div>
    </div>
    <div className="list-divider"></div>
  </div>
</section>



<section className="section">
  <div
    data-w-id="7d1c7efe-7a6f-bca5-a9ae-c0d27a641583"
    className="container background-second"
  >
    <div className="cta-content">
      <div className="heading-mask">
        <h3
          style={{
            transform:
              "translate3d(1, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
          className="h3-heading hcta-1"
        >
          Learn more
          <br />
        </h3>
      </div>
      <div className="heading-mask spaced">
        <h3
          style={{
            transform:
              "translate3d(1, 120%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
          className="h3-heading hcta-2"
        >
          about my services
        </h3>
      </div>
      <a
        data-w-id="4feefef8-d7ea-4c69-0b42-c04bebbec461"
        href="/contact"
        className="button w-inline-block"
      >
        <div className="paragraph-14px difference">CONTACT ME</div>
        <div
          style={{
            transform:
              "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
          className=""
        ></div>
      </a>
    </div>
  </div>
</section>



<section className="footer">
  <div className="container footer">
    <div className="footer-content">
      <div className="footer-buttons-wrapper">
        <a
          data-w-id="cc755e44-7abd-3ab9-e7d6-0957c6c09b7e"
          href="#"
          className="footer-button w-inline-block"
        >
          <div className="paragraph-14px">INSTAGRAM</div>
        </a>
        <a
          data-w-id="cc755e44-7abd-3ab9-e7d6-0957c6c09b81"
          href="#"
          className="footer-button w-inline-block"
        >
          <div className="paragraph-14px">TWITTER</div>
        </a>
        <a
          data-w-id="cc755e44-7abd-3ab9-e7d6-0957c6c09b84"
          href="#"
          className="footer-button w-inline-block"
        >
          <div className="paragraph-14px">LINKEDIN</div>
        </a>
        <a
          data-w-id="cc755e44-7abd-3ab9-e7d6-0957c6c09b87"
          href="#"
          className="footer-button w-inline-block"
        >
          <div className="paragraph-14px">DRIBBLE</div>
        </a>
      </div>
      <div className="footer-text-content">
        <div className="footer-text-wrapper">
          <div className="paragraph-14px">REACH US</div>
          <div className="footer-text-inner">
            <div className="paragraph-14px">( 34 ) 343 - 889 - 023</div>
            <div className="paragraph-14px underlined">HELLO@VIVI.COM</div>
          </div>
        </div>
        <div className="footer-text-wrapper">
          <div className="paragraph-14px">SWITZERLAND</div>
          <div className="footer-text-inner">
            <div className="paragraph-14px">16B CHEMIN DU COLLEGE</div>
            <div className="paragraph-14px">DISTRICT DE NYON</div>
            <div className="paragraph-14px">VAUD 1279</div>
          </div>
        </div>
        <div className="footer-text-wrapper last">
          <div className="paragraph-14px">STAY UPDATED</div>
          <a href="#" className="footer-text-inner w-inline-block">
            <div className="paragraph-14px underlined">
              SUBSCRIBE TO NEWSLETTER
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div
    data-w-id="cc755e44-7abd-3ab9-e7d6-0957c6c09ba3"
    className="container centered bordered"
  >
    <div
      data-w-id="cc755e44-7abd-3ab9-e7d6-0957c6c09ba4"
      className="footer-heading-wrapper"
    >
      <div className="heading-mask">
        <h1 className="h1-heading heading-footer _1">
          Say Hello
          <br />
        </h1>
      </div>
      <div className="heading-mask">
        <h1 className="h1-heading heading-footer _2">to our Team</h1>
      </div>
      <a href="/contact" className="cta-button-footer w-inline-block">
        <div className="paragraph-14px button-footer">SAY HI</div>
      </a>
      <img
        src="https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b771_Footer%403-1728x991%20(1).png"
        srcSet="
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b771_Footer%25403-1728x991%2520(1)-p-500.png 500w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b771_Footer%25403-1728x991%2520(1)-p-800.png 800w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b771_Footer%25403-1728x991%2520(1)-p-1080.png 1080w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b771_Footer%403-1728x991%20(1).png 1296w
        "
        width="648"
        sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 300px, 400px"
        alt="Image"
        className="footer-image _1"
      />
      <img
        src="https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b774_2%20-%20Copy%403-1728x991%20(1).png"
        srcSet="
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b774_2%2520-%2520Copy%25403-1728x991%2520(1)-p-500.png 500w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b774_2%2520-%2520Copy%25403-1728x991%2520(1)-p-800.png 800w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b774_2%2520-%2520Copy%25403-1728x991%2520(1)-p-1080.png 1080w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b774_2%20-%20Copy%403-1728x991%20(1).png 1844w
        "
        width="922"
        sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 300px, 400px"
        alt="Image"
        className="footer-image _2"
      />
      <img
        src="https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%403-1728x991%20(2).png"
        srcSet="
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%25403-1728x991%2520(2)-p-500.png 500w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%25403-1728x991%2520(2)-p-800.png 800w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%25403-1728x991%2520(2)-p-1080.png 1080w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%25403-1728x991%2520(2)-p-1600.png 1600w,
          https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b773_Footer%403-1728x991%20(2).png 2102w
        "
        width="1051"
        sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 300px, 400px"
        alt="Image"
        className="footer-image _3"
      />
    </div>
    <div className="copyright-footer-wrapper">
      <div className="paragraph-16px">
        © Vivi Matisse 2024 — All rights reserved
      </div>
      <div className="paragraph-16px">
        
      </div>
      <div className="copyright-footer-inner">
        <a href="/utility-pages/terms" className="footer-copyright-link">
          Terms and conditions
        </a>
        <a href="/utility-pages/licenses" className="footer-copyright-link">
          Licenses
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
     </>
  )
}

 