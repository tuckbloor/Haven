<template>
    <Head title="Verify Email" />

    <div class="auth-page">
        <section class="auth-left">
            <div class="brand">
                <div class="brand-mark">H</div>
                <span>Haven</span>
            </div>

            <div class="welcome-content">
                <p class="eyebrow">EMAIL VERIFICATION</p>

                <h1>Check Your Inbox</h1>

                <p class="welcome-copy">
                    Haven has sent you a verification link.
                    Open the email and confirm your address to continue.
                </p>
            </div>
        </section>

        <section class="auth-right">
            <div class="form-card">
                <div class="form-heading">
                    <h2>Verify Email</h2>

                    <p>
                        Before continuing, please verify your email address.
                    </p>
                </div>

                <div
                    v-if="status === 'verification-link-sent'"
                    class="status-message"
                >
                    A new verification link has been sent to your email address.
                </div>

                <form @submit.prevent="submit">
                    <button
                        type="submit"
                        class="verify-button"
                        :disabled="form.processing"
                    >
                        {{ form.processing ? 'Sending...' : 'Resend Verification Email' }}
                    </button>
                </form>

                <Link
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="logout-link"
                >
                    Log Out
                </Link>
            </div>
        </section>
    </div>
</template>

<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route as ziggyRoute } from '../../../../vendor/tightenco/ziggy'
import { Ziggy } from '../../ziggy.js'

const route = (name, params = undefined) => {
    return ziggyRoute(name, params, undefined, Ziggy)
}

defineProps({
    status: {
        type: String,
        default: null,
    },
})

const form = useForm({})

const submit = () => {
    form.post(route('verification.send'))
}
</script>
<style scoped>
* {
    box-sizing: border-box;
}

.auth-page {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #f7f9fc;
    color: #172033;
}

.auth-left {
    display: flex;
    flex-direction: column;
    padding: 40px 64px;
    background: #eef5ff;
}

.brand {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 22px;
    font-weight: 700;
}

.brand-mark {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #1769ff;
    color: white;
}

.welcome-content {
    width: 100%;
    max-width: 520px;
    margin: auto;
}

.eyebrow {
    margin-bottom: 12px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: #1769ff;
}

.welcome-content h1 {
    margin: 0;
    font-size: 48px;
    line-height: 1.05;
}

.welcome-copy {
    max-width: 430px;
    margin-top: 20px;
    font-size: 17px;
    line-height: 1.7;
    color: #667085;
}

.auth-right {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background: white;
}

.form-card {
    width: 100%;
    max-width: 460px;
}

.form-heading {
    margin-bottom: 30px;
}

.form-heading h2 {
    margin: 0;
    font-size: 34px;
}

.form-heading p {
    margin: 10px 0 0;
    color: #667085;
}

.status-message {
    margin-bottom: 20px;
    padding: 14px 16px;
    border: 1px solid #b8d2ff;
    border-radius: 10px;
    background: #eef5ff;
    color: #174ea6;
}

.verify-button {
    width: 100%;
    height: 50px;
    border: 0;
    border-radius: 10px;
    background: #1769ff;
    color: white;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
}

.verify-button:disabled {
    opacity: 0.65;
    cursor: default;
}

.logout-link {
    display: block;
    margin: 24px auto 0;
    border: 0;
    background: transparent;
    color: #1769ff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
}

@media (max-width: 900px) {
    .auth-page {
        grid-template-columns: 1fr;
    }

    .auth-left {
        min-height: 300px;
        padding: 32px;
    }

    .welcome-content h1 {
        font-size: 38px;
    }

    .auth-right {
        padding: 48px 24px;
    }
}
</style>
