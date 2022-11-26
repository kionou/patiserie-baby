<template>
    <div class="container">
        <div class="container-contact">
            <div class="container1">
                <div class="contact-box">
                    <div class="left"></div>
                    <div class="right">
                        <h2>Contact Us</h2>
                        <p>
                            500 Terry Francois Street, San Francisco, CA 94158
                        </p>
                        <p>info@mysite.com \\ 123-456-7890 </p>
                        <p>We want to hear from you, write us:</p>
                        <input type="text" class="field" placeholder="Your Name">
                        <input type="text" class="field" placeholder="Your Email">
                        <input type="text" class="field" placeholder="Phone">
                        <textarea placeholder="Message" class="field"></textarea>
                        <button class="btn">Send</button>
                    </div>
                </div>
            </div>

        </div>
        <div class="container-maps">
            <div class="responsive-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
                    width="600" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>

        <Etoile />
    </div>
</template>

<script>
import Etoile from '@/components/etoile.vue';
export default {
    components: { Etoile }

}
</script>

<style scoped>
.container {
    max-width: var(--max-width);
    margin: 0 auto;

    color: var(--chocolat);


}

.container-contact {
    background-color: var(--blanc);
    height: auto;
}


.container1 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}


.contact-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
}

.left {
    background: url("@/assets/images/contact.webp") no-repeat center;
    background-size: cover;
    height: 100%;
}

.right {
    padding: 25px 40px;
}

.right P {
    padding: 11px;
}

h2 {
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;
}

h2:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: var(--bleu);
}

.field {
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0);
    outline: none;
    background-color: rgba(230, 230, 230, 0.6);
    padding: 1rem;
    font-size: 1.1rem;
    margin-bottom: 22px;
    transition: .3s;
}

.field:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

textarea {
    min-height: 150px;
}

.btn {
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: var(--bleu);
    color: var(--blanc);
    font-size: 1.1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: .3s;
}

.btn:hover {
    background-color: var(--bleu);
}

.field:focus {
    border: 2px solid var(--bleu);
    background-color: var(--blanc);
}

@media screen and (max-width: 880px) {

    .container1 {
        padding: 10px;
    }

    .contact-box {
        display: flex;
        flex-direction: column-reverse;
        align-items: normal;
    }

    .left {
        height: 82vh;
    }
}

.container-maps {
    background-color: var(--blanc);
    padding: 20px;
}

.responsive-map {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
}

.responsive-map iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
}
</style>