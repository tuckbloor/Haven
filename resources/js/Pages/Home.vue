<template>
    <Head title="Haven" />

    <div class="landing-page">

        <!-- Header -->
        <header class="site-header">
            <div class="header-inner">

                <div class="brand">
                    <div class="brand-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M3 11.5L12 4l9 7.5" />
                            <path d="M5 10.5V20h14v-9.5" />
                            <path d="M9 20v-6h6v6" />
                        </svg>
                    </div>

                    <span class="brand-name">Haven</span>
                </div>

                <nav class="main-nav">
                    <a href="#features">Features</a>
                    <a href="#how-it-works">How It Works</a>
                    <a href="#about">About</a>
                </nav>

                <div class="auth-actions">
                    <Link
                        href="/login"
                        class="btn btn-login"
                    >
                        Login
                    </Link>

                    <Link
                        href="/register"
                        class="btn btn-primary"
                    >
                        Get Started
                    </Link>
                </div>

            </div>
        </header>


        <!-- Hero -->
        <main>
            <section class="hero">

                <div class="hero-inner">

                    <!-- Left -->
                    <div class="hero-copy">

                        <div class="hero-badge">
                            <span class="hero-badge-dot"></span>
                            Smart home control made simple
                        </div>

                        <h1>
                            A smarter home
                            <span>every single day</span>
                        </h1>

                        <p class="hero-description">
                            Monitor, control and automate your home with
                            a simple, secure interface designed to keep
                            everything in one place.
                        </p>

                        <div class="hero-actions">
                            <Link
                                href="/register"
                                class="btn btn-primary btn-large"
                            >
                                Get Started
                            </Link>

                            <a
                                href="#features"
                                class="btn btn-secondary btn-large"
                            >
                                Explore Features
                            </a>
                        </div>

                        <div class="hero-points">

                            <div class="hero-point">
                                <span class="point-icon">✓</span>
                                Easy device control
                            </div>

                            <div class="hero-point">
                                <span class="point-icon">✓</span>
                                Flexible automations
                            </div>

                            <div class="hero-point">
                                <span class="point-icon">✓</span>
                                Home monitoring
                            </div>

                        </div>

                    </div>


                    <!-- Right -->
                    <div class="hero-visual">

                        <div class="home-preview-card">

                            <div class="preview-top">

                                <div>
                                    <span class="preview-label">
                                        My Home
                                    </span>

                                    <h2>Everything connected</h2>
                                </div>

                                <div class="online-status">
                                    <span class="online-dot"></span>
                                    Online
                                </div>

                            </div>

                            <div class="preview-grid">

                                <div class="preview-stat">
                                    <span>Devices</span>
                                    <strong>12</strong>
                                    <small>10 online</small>
                                </div>

                                <div class="preview-stat">
                                    <span>Automations</span>
                                    <strong>8</strong>
                                    <small>6 active</small>
                                </div>

                                <div class="preview-stat">
                                    <span>Rooms</span>
                                    <strong>6</strong>
                                    <small>Fully connected</small>
                                </div>

                                <div class="preview-stat">
                                    <span>Alerts</span>
                                    <strong>0</strong>
                                    <small>No action needed</small>
                                </div>

                            </div>

                            <div class="room-card">

                                <div>
                                    <strong>Living Room</strong>
                                    <span>3 devices connected</span>
                                </div>

                                <span class="room-status">
                                    Active
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <!-- Features -->
            <section
                id="features"
                class="features-section"
            >

                <div class="section-heading">
                    <span>Everything in one place</span>

                    <h2>
                        Simple control for your entire home
                    </h2>

                    <p>
                        Haven gives you the tools to manage devices,
                        create automations and keep an eye on your home.
                    </p>
                </div>

                <div class="features-inner">

                    <article class="feature-card">

                        <div class="feature-icon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path d="M9 18h6" />
                                <path d="M10 22h4" />
                                <path
                                    d="M8.5 14.5A6 6 0 1 1 15.5 14.5C14.5 15.2 14 16 14 17H10C10 16 9.5 15.2 8.5 14.5Z"
                                />
                            </svg>
                        </div>

                        <h3>Control</h3>

                        <p>
                            Manage lights, switches and smart devices
                            from one place.
                        </p>

                    </article>


                    <article class="feature-card">

                        <div class="feature-icon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
                            </svg>
                        </div>

                        <h3>Automate</h3>

                        <p>
                            Create routines that react to schedules,
                            conditions and events.
                        </p>

                    </article>


                    <article class="feature-card">

                        <div class="feature-icon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>

                        <h3>Stay Safe</h3>

                        <p>
                            See important alerts and recent activity
                            across your home.
                        </p>

                    </article>


                    <article class="feature-card">

                        <div class="feature-icon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path d="M12 2v20" />
                                <path d="M5 9h14" />
                                <path d="M7 9c0-4 2-7 5-7s5 3 5 7" />
                                <path d="M7 9c0 6 2 11 5 13 3-2 5-7 5-13" />
                            </svg>
                        </div>

                        <h3>Save Energy</h3>

                        <p>
                            Track usage and make smarter decisions
                            around your home.
                        </p>

                    </article>

                </div>

            </section>


            <!-- How it works -->
            <section
                id="how-it-works"
                class="how-section"
            >

                <div class="section-heading">
                    <span>How it works</span>

                    <h2>
                        Your smarter home in three steps
                    </h2>

                    <p>
                        Haven keeps setup straightforward so you can
                        get started quickly.
                    </p>
                </div>

                <div class="steps">

                    <div class="step-card">
                        <div class="step-number">1</div>

                        <h3>Create your account</h3>

                        <p>
                            Register for Haven and create your first home.
                        </p>
                    </div>

                    <div class="step-card">
                        <div class="step-number">2</div>

                        <h3>Add your devices</h3>

                        <p>
                            Organise devices into homes and rooms.
                        </p>
                    </div>

                    <div class="step-card">
                        <div class="step-number">3</div>

                        <h3>Create automations</h3>

                        <p>
                            Build schedules and rules that make everyday
                            tasks easier.
                        </p>
                    </div>

                </div>

            </section>


            <!-- CTA -->
            <section
                id="about"
                class="cta-section"
            >
                <div class="cta-card">

                    <div>
                        <span class="cta-small">
                            Ready to get started?
                        </span>

                        <h2>
                            Build your smarter home with Haven.
                        </h2>

                        <p>
                            Create your account and start organising
                            your smart home today.
                        </p>
                    </div>

                    <Link
                        href="/register"
                        class="btn btn-primary btn-large"
                    >
                        Create Account
                    </Link>

                </div>
            </section>

        </main>


        <!-- Footer -->
        <footer class="site-footer">

            <div class="footer-inner">

                <div class="brand">
                    <div class="brand-icon small">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M3 11.5L12 4l9 7.5" />
                            <path d="M5 10.5V20h14v-9.5" />
                            <path d="M9 20v-6h6v6" />
                        </svg>
                    </div>

                    <span class="brand-name">
                        Haven
                    </span>
                </div>

                <p>
                    Smart home control made simple.
                </p>

            </div>

        </footer>

    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3'
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.landing-page {
    min-height: 100vh;
    background: #f7f9fc;
    color: #172033;
    font-family:
        Inter,
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
}


/* Header */

.site-header {
    background: #ffffff;
    border-bottom: 1px solid #e6ebf2;
}

.header-inner {
    width: min(1180px, calc(100% - 40px));
    min-height: 72px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 10px;
}

.brand-icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1769ff;
    color: white;
    border-radius: 10px;
    box-shadow: 0 6px 16px rgba(23, 105, 255, 0.2);
}

.brand-icon.small {
    width: 32px;
    height: 32px;
}

.brand-icon svg {
    width: 20px;
    height: 20px;
}

.brand-name {
    font-size: 18px;
    font-weight: 700;
}

.main-nav {
    display: flex;
    align-items: center;
    gap: 28px;
}

.main-nav a {
    color: #60708a;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
}

.main-nav a:hover {
    color: #1769ff;
}

.auth-actions {
    display: flex;
    gap: 10px;
}


/* Buttons */

.btn {
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 18px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    transition: 0.2s ease;
}

.btn-primary {
    background: #1769ff;
    color: #ffffff;
    border: 1px solid #1769ff;
    box-shadow: 0 6px 16px rgba(23, 105, 255, 0.18);
}

.btn-primary:hover {
    background: #0f5be2;
    border-color: #0f5be2;
}

.btn-login,
.btn-secondary {
    background: #ffffff;
    color: #334155;
    border: 1px solid #d9e0e9;
}

.btn-login:hover,
.btn-secondary:hover {
    background: #f8fafc;
    border-color: #b9c4d2;
}

.btn-large {
    min-height: 48px;
    padding: 0 24px;
}


/* Hero */

.hero {
    background:
        linear-gradient(
            90deg,
            #ffffff 0%,
            #f8fbff 55%,
            #eef5ff 100%
        );
    border-bottom: 1px solid #e8edf4;
}

.hero-inner {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;
    min-height: 560px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 70px;
    padding: 70px 0;
}

.hero-copy {
    max-width: 560px;
}

.hero-badge {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 8px 12px;
    margin-bottom: 22px;
    border: 1px solid #cfe0ff;
    background: #edf4ff;
    color: #1769ff;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 700;
}

.hero-badge-dot {
    width: 8px;
    height: 8px;
    background: #1769ff;
    border-radius: 50%;
}

.hero h1 {
    margin: 0;
    font-size: clamp(48px, 5vw, 68px);
    line-height: 1.02;
    letter-spacing: -2.5px;
    font-weight: 800;
    color: #172033;
}

.hero h1 span {
    display: block;
    color: #1769ff;
}

.hero-description {
    max-width: 540px;
    margin: 24px 0 0;
    color: #63728a;
    font-size: 18px;
    line-height: 1.75;
}

.hero-actions {
    display: flex;
    gap: 12px;
    margin-top: 30px;
}

.hero-points {
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    margin-top: 34px;
}

.hero-point {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #5f6e84;
    font-size: 14px;
}

.point-icon {
    width: 22px;
    height: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #e8f1ff;
    color: #1769ff;
    border-radius: 50%;
    font-weight: 800;
}


/* Hero preview */

.hero-visual {
    display: flex;
    justify-content: center;
}

.home-preview-card {
    width: 100%;
    max-width: 500px;
    background: #ffffff;
    border: 1px solid #dfe6ef;
    border-radius: 18px;
    padding: 24px;
    box-shadow:
        0 20px 50px rgba(64, 90, 130, 0.12);
}

.preview-top {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e8edf4;
}

.preview-label {
    color: #8290a5;
    font-size: 13px;
}

.preview-top h2 {
    margin: 4px 0 0;
    font-size: 20px;
}

.online-status {
    height: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 10px;
    background: #effaf5;
    color: #178859;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 700;
}

.online-dot {
    width: 7px;
    height: 7px;
    background: #18a66a;
    border-radius: 50%;
}

.preview-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-top: 20px;
}

.preview-stat {
    padding: 18px;
    background: #f8fafc;
    border: 1px solid #e4eaf2;
    border-radius: 12px;
}

.preview-stat span,
.preview-stat small {
    display: block;
    color: #7d8a9d;
}

.preview-stat span {
    font-size: 13px;
}

.preview-stat strong {
    display: block;
    margin: 7px 0 2px;
    font-size: 28px;
    color: #1d2738;
}

.preview-stat small {
    font-size: 12px;
}

.room-card {
    margin-top: 14px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background: #f8fafc;
    border: 1px solid #e4eaf2;
    border-radius: 12px;
}

.room-card strong,
.room-card span {
    display: block;
}

.room-card strong {
    font-size: 14px;
}

.room-card div > span {
    margin-top: 4px;
    color: #7b899d;
    font-size: 12px;
}

.room-status {
    padding: 6px 9px;
    background: #edf4ff;
    color: #1769ff;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 700;
}


/* Sections */

.features-section,
.how-section,
.cta-section {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;
}

.features-section {
    padding: 86px 0;
}

.section-heading {
    max-width: 660px;
    margin: 0 auto 42px;
    text-align: center;
}

.section-heading > span,
.cta-small {
    color: #1769ff;
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.section-heading h2 {
    margin: 10px 0 14px;
    font-size: 36px;
    letter-spacing: -1px;
}

.section-heading p {
    margin: 0;
    color: #6d7b90;
    font-size: 16px;
    line-height: 1.7;
}

.features-inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.feature-card {
    background: #ffffff;
    border: 1px solid #e1e7ef;
    border-radius: 14px;
    padding: 24px;
    box-shadow: 0 8px 24px rgba(40, 65, 100, 0.06);
}

.feature-icon {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #edf4ff;
    color: #1769ff;
    border-radius: 12px;
}

.feature-icon svg {
    width: 22px;
    height: 22px;
}

.feature-card h3 {
    margin: 18px 0 8px;
    font-size: 18px;
}

.feature-card p {
    margin: 0;
    color: #718096;
    font-size: 14px;
    line-height: 1.65;
}


/* How it works */

.how-section {
    padding: 84px 0;
    border-top: 1px solid #e5ebf3;
}

.steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.step-card {
    padding: 26px;
    background: #ffffff;
    border: 1px solid #e1e7ef;
    border-radius: 14px;
}

.step-number {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1769ff;
    color: #ffffff;
    border-radius: 10px;
    font-weight: 800;
}

.step-card h3 {
    margin: 18px 0 8px;
}

.step-card p {
    margin: 0;
    color: #718096;
    line-height: 1.65;
}


/* CTA */

.cta-section {
    padding: 10px 0 90px;
}

.cta-card {
    padding: 34px 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    background: #edf4ff;
    border: 1px solid #d5e3fb;
    border-radius: 16px;
}

.cta-card h2 {
    margin: 7px 0;
    font-size: 28px;
}

.cta-card p {
    margin: 0;
    color: #64748b;
}


/* Footer */

.site-footer {
    background: #ffffff;
    border-top: 1px solid #e4e9f0;
}

.footer-inner {
    width: min(1180px, calc(100% - 40px));
    min-height: 82px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.footer-inner p {
    color: #7a8799;
    font-size: 13px;
}


/* Responsive */

@media (max-width: 960px) {
    .main-nav {
        display: none;
    }

    .hero-inner {
        grid-template-columns: 1fr;
        gap: 45px;
    }

    .hero-copy {
        max-width: none;
    }

    .features-inner {
        grid-template-columns: repeat(2, 1fr);
    }

    .steps {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 640px) {
    .header-inner {
        width: min(100% - 24px, 1180px);
        min-height: 68px;
    }

    .brand-name {
        font-size: 16px;
    }

    .auth-actions .btn {
        padding: 0 12px;
    }

    .hero-inner {
        width: min(100% - 24px, 1180px);
        padding: 48px 0;
    }

    .hero h1 {
        font-size: 44px;
    }

    .hero-description {
        font-size: 16px;
    }

    .hero-actions {
        flex-direction: column;
    }

    .hero-actions .btn {
        width: 100%;
    }

    .hero-points {
        flex-direction: column;
        gap: 12px;
    }

    .preview-grid {
        grid-template-columns: 1fr;
    }

    .features-section,
    .how-section,
    .cta-section {
        width: min(100% - 24px, 1180px);
    }

    .features-inner {
        grid-template-columns: 1fr;
    }

    .cta-card {
        flex-direction: column;
        align-items: flex-start;
        padding: 28px;
    }

    .footer-inner {
        width: min(100% - 24px, 1180px);
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 20px 0;
    }
}
</style>
