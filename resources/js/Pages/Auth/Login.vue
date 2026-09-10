<template>
    <Head title="Login" />

    <div class="auth-page">
        <section class="auth-left">
            <div class="brand">
                <div class="brand-mark">H</div>
                <span>Haven</span>
            </div>

            <div class="welcome-content">
                <p class="eyebrow">SMART HOME CONTROL</p>

                <h1>Welcome Back</h1>

                <p class="welcome-copy">
                    Sign in to manage your home, devices, rooms and automations.
                </p>

                <div class="house-card">
                    <div class="house-roof"></div>

                    <div class="house-body">
                        <div class="window"></div>
                        <div class="window"></div>
                        <div class="door"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="auth-right">
            <div class="form-card">
                <div class="form-heading">
                    <h2>Login</h2>
                    <p>Enter your details to access your Haven account.</p>
                </div>

                <div
                    v-if="status"
                    class="status-message"
                >
                    {{ status }}
                </div>

                <div
                    v-if="form.errors.email"
                    class="login-error"
                    role="alert"
                >
                    <div class="error-icon">!</div>

                    <div>
                        <strong>Login failed</strong>
                        <p>{{ form.errors.email }}</p>
                    </div>
                </div>

                <form @submit.prevent="submit">
                    <div class="field">
                        <label for="email">Email</label>

                        <input
                            id="email"
                            v-model="form.email"
                            type="email"
                            autocomplete="username"
                            autofocus
                            placeholder="you@example.com"
                        >
                    </div>

                    <div class="field">
                        <div class="field-heading">
                            <label for="password">Password</label>

                            <Link
                                v-if="canResetPassword"
                                :href="route('password.request')"
                                class="forgot-link"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <input
                            id="password"
                            v-model="form.password"
                            type="password"
                            autocomplete="current-password"
                            placeholder="Enter your password"
                        >

                        <p
                            v-if="form.errors.password"
                            class="field-error"
                        >
                            {{ form.errors.password }}
                        </p>
                    </div>

                    <label class="remember-row">
                        <input
                            v-model="form.remember"
                            type="checkbox"
                        >

                        <span>Remember me</span>
                    </label>

                    <button
                        type="submit"
                        class="login-button"
                        :disabled="form.processing"
                    >
                        {{ form.processing ? 'Signing in...' : 'Login' }}
                    </button>
                </form>

                <p class="register-link">
                    Don't have an account?

                    <Link :href="route('register')">
                        Register
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

defineProps({
    canResetPassword: {
        type: Boolean,
        default: false,
    },

    status: {
        type: String,
        default: null,
    },
})

const form = useForm({
    email: '',
    password: '',
    remember: false,
})

const submit = () => {
    form.post(route('login'), {
        onFinish: () => {
            form.reset('password')
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
    position: relative;
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

.house-card {
    position: relative;
    width: 260px;
    height: 220px;
    margin-top: 54px;
}

.house-roof {
    position: absolute;
    left: 45px;
    top: 20px;
    width: 170px;
    height: 170px;
    transform: rotate(45deg);
    border-radius: 22px;
    background: #cfe0ff;
}

.house-body {
    position: absolute;
    left: 55px;
    bottom: 0;
    width: 150px;
    height: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    padding: 26px;
    border-radius: 18px;
    background: white;
    box-shadow: 0 14px 40px rgba(23, 105, 255, 0.12);
}

.window {
    height: 34px;
    border-radius: 8px;
    background: #dce9ff;
}

.door {
    grid-column: 1 / -1;
    width: 34px;
    height: 58px;
    justify-self: center;
    border-radius: 8px 8px 0 0;
    background: #1769ff;
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

.login-error {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    padding: 14px 16px;
    border: 1px solid #f3b5b5;
    border-radius: 10px;
    background: #fff2f2;
    color: #a01818;
}

.login-error p {
    margin: 4px 0 0;
}

.error-icon {
    flex: 0 0 26px;
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #c62828;
    color: white;
    font-weight: 700;
}

.field {
    margin-bottom: 20px;
}

.field-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
}

.field label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
}

.field-heading label {
    margin-bottom: 0;
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

.forgot-link,
.register-link a {
    color: #1769ff;
    text-decoration: none;
    font-weight: 600;
}

.remember-row {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 22px;
    font-size: 14px;
    color: #475467;
}

.login-button {
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

.login-button:disabled {
    opacity: 0.65;
    cursor: default;
}

.field-error {
    margin: 7px 0 0;
    font-size: 13px;
    color: #b42318;
}

.register-link {
    margin-top: 24px;
    text-align: center;
    color: #667085;
}

@media (max-width: 900px) {
    .auth-page {
        grid-template-columns: 1fr;
    }

    .auth-left {
        min-height: 360px;
        padding: 32px;
    }

    .welcome-content h1 {
        font-size: 38px;
    }

    .house-card {
        display: none;
    }

    .auth-right {
        padding: 48px 24px;
    }
}
</style>
