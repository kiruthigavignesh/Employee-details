import React from "react";
import demo from "../images/demo.png";
import demo1 from "../images/demo2.png";
import content from "../images/content.png";
import shape from "../images/shape_1.png";
import arrow from "../images/arrow.png";
import website from "../images/website.png";
import software from "../images/software.png";
import android from "../images/android.png";

const Content = () => {
  return (
    <div className="top">
      <div class="content-container" id="section1">
        <div class="content-header">
          <div class="text-content">
            <h1 class="header-text animation">
              Your<span class="header-text-color"> business dreams</span>
              <br />
              made easier
            </h1>
            <p class="header-para animation">
              Discover the cutting-edge solution to streamline your software
              development process with our innovative products. Revolutionize
              your workflow with intuitive tools designed to enhance
              productivity and efficiency. Harness the power of advanced
              technology to elevate your software projects to new heights.{" "}
            </p>
            <div class="getstarted_button">
              <div className="started-hover">
                <button className="getStarted-btn animation d-flex justify-content-center gap-1">
                  Get Started
                  <img src={arrow} alt="Arrow" width={30} height={30} />
                </button>
              </div>

              <button class="contact_btn animation ">Contact Sales</button>
            </div>
          </div>
        </div>
        <div class="image_align " id="rotate">
          <img src={shape} class="image_icon" />
        </div>
        <div class=""></div>
        <div class="image-content">
          <img src={demo} alt="banner_img" class="feature-img animation" />
          <div class="overlay overlay_0  animation ">
            <img src={content} class="image_icon2 animation" />
          </div>
        </div>
      </div>

      <div class="content-container" id="section1">
        <div class="image-content">
          <img src={demo1} alt="banner_img" class="feature-img animation" />
        </div>
        <div class="content-header">
          <div class="text-content">
            <h1 class="header-text animation">
              Our<span class="header-text-color"> Services</span>
            </h1>
            <p class="header-para animation">
              Unlock the full potential of your business with our comprehensive
              suite of services tailored to meet your every need.
            </p>
            <p class="header-para animation">
              {" "}
              From expert software development and implementation to robust IT
              consulting and support, we've got you covered. Elevate your
              digital presence with our cutting-edge solutions, crafted to drive
              growth and efficiency.{" "}
            </p>
            <p class="header-para animation">
              Trust in our seasoned professionals to deliver top-notch service
              and support, ensuring your success every step of the way.
              Experience unparalleled results and take your business to the next
              level with our industry-leading services.
            </p>
          </div>
        </div>
      </div>

      <div class="content-header">
        <div class="text-content">
          <h1 class="header-text animation">
            What<span class="header-text-color"> We Do</span>
          </h1>
        </div>
      </div>

      <section id="section2">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-4">
              <div class="card">
                <img
                src={android}
                  alt=""
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Android App Development</h5>
                  <p class="card-text">
                    Seamlessly designed to enhance your mobile experience, our
                    app offers unparalleled functionality and user-friendly
                    interface. Whether you're managing tasks, connecting with
                    friends, or accessing vital information on the go, our app
                    delivers unmatched performance and reliability.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card">
                <img
                src={website}
                  alt=""
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Website Developer</h5>
                  <p class="card-text">
                    {" "}
                    Our team of expert developers crafts dynamic and responsive
                    websites tailored to your unique needs and vision. From
                    sleek and modern designs to robust e-commerce solutions, we
                    transform your ideas into stunning online realities. With a
                    focus on user experience .{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card">
                <img
                src={software}
                  alt=""
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Software Development</h5>
                  <p class="card-text">
                    Step into the future of technology with our bespoke software
                    development solutions. Our seasoned team of developers
                    specializes in crafting cutting-edge software tailored to
                    your specific requirements. From conceptualization to
                    deployment, we work closely with you to understand your
                    needs.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
