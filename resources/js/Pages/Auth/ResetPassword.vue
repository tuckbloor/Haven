<template>
    <Head title="Reset Password" />

    <div class="auth-page">
        <section class="auth-left">
            <div class="brand">
                <div class="brand-mark">H</div>
                <span>Haven</span>
            </div>

            <div class="welcome-content">
                <p class="eyebrow">ACCOUNT RECOVERY</p>

                <h1>Create New Password</h1>

                <p class="welcome-copy">
                    Choose a new password for your Haven account.
                </p>
            </div>
        </section>

        <section class="auth-right">
            <div class="form-card">
                <div class="form-heading">
                    <h2>Reset Password</h2>
                    <p>Enter your new password below.</p>
                </div>

                <form @submit.prevent="submit">
                    <div class="field">
                        <label for="email">Email</label>

                        <input
                            id="email"
                            v-model="form.email"
                            type="email"
                            autocomplete="username"
                            readonly
                        >

                        <p
                            v-if="form.errors.email"
                            class="field-error"
                        >
                            {{ form.errors.email }}
                        </p>
                    </div>

                    <div class="field">
                        <label for="password">New Password</label>

                        <input
                            id="password"
                            v-model="form.password"
                            type="password"
                            autocomplete="new-password"
                            autofocus
                            placeholder="Enter new password"
                        >

                        <p
                            v-if="form.errors.password"
                            class="field-error"
                        >
                            {{ form.errors.password }}
                        </p>
                    </div>

                    <div class="field">
                        <label for="password_confirmation">
                            Confirm New Password
                        </label>

                        <input
                            id="password_confirmation"
                            v-model="form.password_confirmation"
                            type="password"
                            autocomplete="new-password"
                            placeholder="Confirm new password"
                        >
                    </div>

                    <button
                        type="submit"
                        class="reset-button"
                        :disabled="form.processing"
                    >
                        {{ form.processing ? 'Resetting...' : 'Reset Password' }}
                    </button>
                </form>

                <p class="back-link">
                    <Link :href="route('login')">
                        Back to Login
                    </Link>
                </p>
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

const props = defineProps({
    email: {
        type: String,
        required: true,
    },

    token: {
        type: String,
        required: true,
    },
})

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
})

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation')
        },
    })
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

.field {
    margin-bottom: 20px;
}

.field label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    height: 48px;
    padding: 0 14px;
    border: 1px solid #d0d5dd;
    border-radius: 10px;
    background: white;
    color: #172033;
    outline: none;
}

input[type="email"]:focus,
input[type="password"]:focus {
    border-color: #1769ff;
    box-shadow: 0 0 0 3px rgba(23, 105, 255, 0.12);
}

input[readonly] {
    background: #f8fafc;
}

.field-error {
    margin: 7px 0 0;
    font-size: 13px;
    color: #b42318;
}

.reset-button {
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

.reset-button:disabled {
    opacity: 0.65;
    cursor: default;
}

.back-link {
    margin-top: 24px;
    text-align: center;
}

.back-link a {
    color: #1769ff;
    text-decoration: none;
    font-weight: 600;
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
