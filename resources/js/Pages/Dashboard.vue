<template>
    <Head title="Dashboard" />

    <div class="haven-app">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="brand">
                <div class="brand-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M3 11.5 12 4l9 7.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-8Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9 21v-6h6v6"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>

                <span>Haven</span>
            </div>

            <nav class="nav">
                <a href="#" class="nav-item active">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M4 13h6V4H4v9Zm0 7h6v-4H4v4Zm10 0h6v-9h-6v9Zm0-16v4h6V4h-6Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                            stroke-linejoin="round"
                        />
                    </svg>
                    Dashboard
                </a>

                <a href="#" class="nav-item">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M3 11.5 12 4l9 7.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-8Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                        />
                    </svg>
                    My Home
                </a>

                <a href="#" class="nav-item">
                    <svg viewBox="0 0 24 24">
                        <rect
                            x="5"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                        />
                        <circle cx="12" cy="17" r="1.2" fill="currentColor" />
                    </svg>
                    Devices
                </a>

                <a href="#" class="nav-item">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M13 2 5 13h6l-1 9 9-12h-6V2Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                            stroke-linejoin="round"
                        />
                    </svg>
                    Automations
                </a>

                <a href="#" class="nav-item">
                    <svg viewBox="0 0 24 24">
                        <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                        />
                        <path
                            d="M12 7v5l3 2"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                            stroke-linecap="round"
                        />
                    </svg>
                    Schedules
                </a>

                <a href="#" class="nav-item">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                        />
                        <path
                            d="M10 19h4"
                            stroke="currentColor"
                            stroke-width="1.7"
                            stroke-linecap="round"
                        />
                    </svg>
                    Alerts
                </a>
            </nav>

            <div class="sidebar-bottom">
                <a href="#" class="nav-item">
                    <svg viewBox="0 0 24 24">
                        <circle
                            cx="12"
                            cy="12"
                            r="3"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                        />
                        <path
                            d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.4 1a8 8 0 0 0-2-1.2L14.2 3h-4.4l-.3 2.7a8 8 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.4-1a8 8 0 0 0 2 1.2l.3 2.7h4.4l.3-2.7a8 8 0 0 0 2-1.2l2.4 1 2-3.4-2-1.5A7 7 0 0 0 19 12Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                        />
                    </svg>
                    Settings
                </a>

                <Link
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="nav-item logout"
                >
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5M16 8l4 4-4 4M20 12H9"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    Logout
                </Link>
            </div>
        </aside>

        <!-- Main -->
        <main class="main">
            <!-- Header -->
            <header class="topbar">
                <div>
                    <p class="eyebrow">MY HOME</p>
                    <h1>Good evening</h1>
                    <p class="welcome">
                        Here's what's happening around your home.
                    </p>
                </div>

                <div class="topbar-actions">
                    <button class="icon-button" aria-label="Notifications">
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6Z"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            />
                            <path
                                d="M10 19h4"
                                stroke="currentColor"
                                stroke-width="1.7"
                                stroke-linecap="round"
                            />
                        </svg>

                        <span class="notification-dot"></span>
                    </button>

                    <div class="user">
                        <div class="avatar">CB</div>

                        <div>
                            <strong>Chris</strong>
                            <span>Home Owner</span>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Summary cards -->
            <section class="stats-grid">
                <article class="stat-card">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24">
                            <rect
                                x="5"
                                y="3"
                                width="14"
                                height="18"
                                rx="3"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            />
                            <circle cx="12" cy="17" r="1.2" fill="currentColor" />
                        </svg>
                    </div>

                    <div>
                        <span class="stat-label">Devices</span>
                        <strong class="stat-number">12</strong>
                        <span class="stat-meta">
                            <span class="status-symbol">●</span>
                            10 online
                        </span>
                    </div>
                </article>

                <article class="stat-card">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M13 2 5 13h6l-1 9 9-12h-6V2Z"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>

                    <div>
                        <span class="stat-label">Automations</span>
                        <strong class="stat-number">6</strong>
                        <span class="stat-meta">
                            <span class="status-symbol">✓</span>
                            All active
                        </span>
                    </div>
                </article>

                <article class="stat-card">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M3 11.5 12 4l9 7.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-8Z"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            />
                        </svg>
                    </div>

                    <div>
                        <span class="stat-label">Rooms</span>
                        <strong class="stat-number">7</strong>
                        <span class="stat-meta">
                            Across your home
                        </span>
                    </div>
                </article>

                <article class="stat-card">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6Z"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            />
                        </svg>
                    </div>

                    <div>
                        <span class="stat-label">Alerts</span>
                        <strong class="stat-number">2</strong>
                        <span class="stat-meta warning">
                            <span class="status-symbol">!</span>
                            Need attention
                        </span>
                    </div>
                </article>
            </section>

            <!-- Main dashboard grid -->
            <section class="dashboard-grid">
                <!-- Rooms -->
                <article class="panel rooms-panel">
                    <div class="panel-header">
                        <div>
                            <h2>Rooms</h2>
                            <p>Quick access to your home</p>
                        </div>

                        <button class="text-button">
                            View all
                            <span>→</span>
                        </button>
                    </div>

                    <div class="room-grid">
                        <button class="room-card">
                            <div class="room-icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M4 14v5M20 14v5M4 16h16M6 16v-5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.7"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <strong>Living Room</strong>
                                <span>4 devices</span>
                            </div>

                            <span class="room-arrow">›</span>
                        </button>

                        <button class="room-card">
                            <div class="room-icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M5 18V8h14v10M3 18h18M8 8V5h8v3"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.7"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <strong>Kitchen</strong>
                                <span>3 devices</span>
                            </div>

                            <span class="room-arrow">›</span>
                        </button>

                        <button class="room-card">
                            <div class="room-icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M4 17v-6h16v6M4 14h16M6 11V8h5a2 2 0 0 1 2 2v1M4 17v2M20 17v2"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.7"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <strong>Bedroom</strong>
                                <span>2 devices</span>
                            </div>

                            <span class="room-arrow">›</span>
                        </button>

                        <button class="room-card">
                            <div class="room-icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M7 4h10v16H7zM4 20h16M10 8h4"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.7"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <strong>Office</strong>
                                <span>3 devices</span>
                            </div>

                            <span class="room-arrow">›</span>
                        </button>
                    </div>
                </article>

                <!-- Home status -->
                <article class="panel status-panel">
                    <div class="panel-header">
                        <div>
                            <h2>Home Status</h2>
                            <p>Everything looks good</p>
                        </div>

                        <span class="status-pill">
                            <span>✓</span>
                            Secure
                        </span>
                    </div>

                    <div class="status-list">
                        <div class="status-row">
                            <div class="status-row-icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M7 11V8a5 5 0 0 1 10 0v3M5 11h14v10H5z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.7"
                                    />
                                </svg>
                            </div>

                            <div>
                                <strong>Doors & Windows</strong>
                                <span>All secured</span>
                            </div>

                            <span class="check">✓</span>
                        </div>

                        <div class="status-row">
                            <div class="status-row-icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M12 2v20M8 6h4a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h7"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.7"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <strong>Temperature</strong>
                                <span>21°C average</span>
                            </div>

                            <span class="value">21°C</span>
                        </div>

                        <div class="status-row">
                            <div class="status-row-icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M13 2 5 13h6l-1 9 9-12h-6V2Z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.7"
                                    />
                                </svg>
                            </div>

                            <div>
                                <strong>Energy Usage</strong>
                                <span>Normal consumption</span>
                            </div>

                            <span class="value">2.4 kW</span>
                        </div>
                    </div>
                </article>

                <!-- Recent activity -->
                <article class="panel activity-panel">
                    <div class="panel-header">
                        <div>
                            <h2>Recent Activity</h2>
                            <p>Latest events around your home</p>
                        </div>

                        <button class="text-button">
                            View history
                            <span>→</span>
                        </button>
                    </div>

                    <div class="activity-list">
                        <div class="activity-item">
                            <div class="activity-marker">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M13 2 5 13h6l-1 9 9-12h-6V2Z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.7"
                                    />
                                </svg>
                            </div>

                            <div class="activity-copy">
                                <strong>Evening lights activated</strong>
                                <span>Automation · Living Room</span>
                            </div>

                            <time>2 min ago</time>
                        </div>

                        <div class="activity-item">
                            <div class="activity-marker">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M7 11V8a5 5 0 0 1 10 0v3M5 11h14v10H5z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.7"
                                    />
                                </svg>
                            </div>

                            <div class="activity-copy">
                                <strong>Front door locked</strong>
                                <span>Front Door Lock</span>
                            </div>

                            <time>18 min ago</time>
                        </div>

                        <div class="activity-item">
                            <div class="activity-marker">
                                <svg viewBox="0 0 24 24">
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="8"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.7"
                                    />
                                    <path
                                        d="M12 7v5l3 2"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.7"
                                    />
                                </svg>
                            </div>

                            <div class="activity-copy">
                                <strong>Heating schedule completed</strong>
                                <span>Morning Heating</span>
                            </div>

                            <time>1 hr ago</time>
                        </div>
                    </div>
                </article>

                <!-- Quick actions -->
                <article class="panel quick-panel">
                    <div class="panel-header">
                        <div>
                            <h2>Quick Actions</h2>
                            <p>Control your home</p>
                        </div>
                    </div>

                    <div class="quick-actions">
                        <button class="quick-action primary">
                            <svg viewBox="0 0 24 24">
                                <path
                                    d="M13 2 5 13h6l-1 9 9-12h-6V2Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.8"
                                />
                            </svg>
                            Run Automation
                        </button>

                        <button class="quick-action">
                            <svg viewBox="0 0 24 24">
                                <rect
                                    x="5"
                                    y="3"
                                    width="14"
                                    height="18"
                                    rx="3"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.7"
                                />
                            </svg>
                            Add Device
                        </button>

                        <button class="quick-action">
                            <svg viewBox="0 0 24 24">
                                <path
                                    d="M3 11.5 12 4l9 7.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-8Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.7"
                                />
                            </svg>
                            Add Room
                        </button>
                    </div>
                </article>
            </section>
        </main>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3'
import { route as ziggyRoute } from '../../../vendor/tightenco/ziggy'
import { Ziggy } from '../ziggy.js'

const route = (name, params = undefined) => {
    return ziggyRoute(name, params, undefined, Ziggy)
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

button,
a {
    font: inherit;
}

button {
    cursor: pointer;
}

.haven-app {
    min-height: 100vh;
    display: flex;
    background: #f5f7fb;
    color: #162033;
    font-family:
        Inter,
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
}

/* Sidebar */

.sidebar {
    width: 235px;
    min-height: 100vh;
    background: #ffffff;
    border-right: 1px solid #e4e9f1;
    padding: 26px 18px 20px;
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0 auto 0 0;
}

.brand {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 0 10px 28px;
    color: #162033;
    font-size: 21px;
    font-weight: 750;
    letter-spacing: -0.5px;
}

.brand-icon {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: #1769ff;
    color: white;
}

.brand-icon svg {
    width: 21px;
    height: 21px;
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.nav-item {
    border: 0;
    width: 100%;
    height: 44px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 9px;
    background: transparent;
    color: #667085;
    text-decoration: none;
    font-size: 14px;
    font-weight: 550;
    text-align: left;
    transition:
        background 0.15s ease,
        color 0.15s ease;
}

.nav-item svg {
    width: 20px;
    height: 20px;
    flex: 0 0 auto;
}

.nav-item:hover {
    background: #f2f6ff;
    color: #1769ff;
}

.nav-item.active {
    background: #edf4ff;
    color: #1769ff;
    font-weight: 650;
}

.sidebar-bottom {
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid #edf0f4;
}

.logout {
    margin-top: 5px;
}

/* Main */

.main {
    width: calc(100% - 235px);
    margin-left: 235px;
    padding: 34px 38px 50px;
}

.topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
}

.eyebrow {
    color: #1769ff;
    font-size: 11px;
    font-weight: 750;
    letter-spacing: 1px;
    margin: 0 0 5px;
}

.topbar h1 {
    margin: 0;
    color: #162033;
    font-size: 28px;
    font-weight: 720;
    letter-spacing: -0.8px;
}

.welcome {
    margin: 5px 0 0;
    color: #7b8495;
    font-size: 14px;
}

.topbar-actions {
    display: flex;
    align-items: center;
    gap: 20px;
}

.icon-button {
    width: 42px;
    height: 42px;
    position: relative;
    display: grid;
    place-items: center;
    border: 1px solid #e3e8ef;
    border-radius: 11px;
    background: #ffffff;
    color: #5f6979;
}

.icon-button svg {
    width: 20px;
    height: 20px;
}

.notification-dot {
    width: 8px;
    height: 8px;
    position: absolute;
    top: 8px;
    right: 8px;
    border: 2px solid white;
    border-radius: 50%;
    background: #1769ff;
}

.user {
    display: flex;
    align-items: center;
    gap: 10px;
}

.avatar {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #eaf2ff;
    color: #1769ff;
    font-size: 13px;
    font-weight: 750;
}

.user strong,
.user span {
    display: block;
}

.user strong {
    color: #263247;
    font-size: 13px;
    font-weight: 650;
}

.user span {
    margin-top: 2px;
    color: #8a93a2;
    font-size: 11px;
}

/* Stats */

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
    margin-bottom: 20px;
}

.stat-card {
    min-height: 130px;
    padding: 22px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    background: #ffffff;
    border: 1px solid #e5eaf1;
    border-radius: 14px;
    box-shadow: 0 4px 14px rgba(28, 39, 60, 0.035);
}

.stat-icon {
    width: 43px;
    height: 43px;
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: #edf4ff;
    color: #1769ff;
}

.stat-icon svg {
    width: 21px;
    height: 21px;
}

.stat-label {
    display: block;
    margin-bottom: 3px;
    color: #7c8696;
    font-size: 12px;
    font-weight: 550;
}

.stat-number {
    display: block;
    color: #172238;
    font-size: 27px;
    font-weight: 720;
    line-height: 1.15;
}

.stat-meta {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 8px;
    color: #687386;
    font-size: 11px;
}

.status-symbol {
    color: #1769ff;
    font-weight: 800;
}

.stat-meta.warning {
    color: #8a5b13;
}

.warning .status-symbol {
    width: 16px;
    height: 16px;
    display: inline-grid;
    place-items: center;
    border-radius: 50%;
    background: #fff4d8;
}

/* Panels */

.dashboard-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.65fr) minmax(310px, 0.9fr);
    gap: 20px;
}

.panel {
    padding: 23px;
    background: #ffffff;
    border: 1px solid #e5eaf1;
    border-radius: 14px;
    box-shadow: 0 4px 14px rgba(28, 39, 60, 0.03);
}

.panel-header {
    min-height: 42px;
    margin-bottom: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
}

.panel-header h2 {
    margin: 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 680;
}

.panel-header p {
    margin: 4px 0 0;
    color: #8a93a3;
    font-size: 11px;
}

.text-button {
    padding: 5px 0;
    border: 0;
    background: transparent;
    color: #1769ff;
    font-size: 12px;
    font-weight: 650;
}

.text-button span {
    margin-left: 4px;
}

.room-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
}

.room-card {
    min-height: 78px;
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 13px;
    text-align: left;
    border: 1px solid #e8ecf2;
    border-radius: 11px;
    background: #fbfcfe;
    transition:
        border-color 0.15s ease,
        background 0.15s ease,
        transform 0.15s ease;
}

.room-card:hover {
    border-color: #b8d0ff;
    background: #f5f8ff;
    transform: translateY(-1px);
}

.room-icon {
    width: 39px;
    height: 39px;
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #edf4ff;
    color: #1769ff;
}

.room-icon svg {
    width: 20px;
    height: 20px;
}

.room-card strong,
.room-card span {
    display: block;
}

.room-card strong {
    color: #253046;
    font-size: 12px;
    font-weight: 650;
}

.room-card span {
    margin-top: 4px;
    color: #929aaa;
    font-size: 10px;
}

.room-arrow {
    margin-left: auto !important;
    color: #adb5c2 !important;
    font-size: 22px !important;
}

.status-pill {
    height: 26px;
    padding: 0 9px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    border: 1px solid #bed5ff;
    border-radius: 999px;
    background: #f0f6ff;
    color: #1769ff;
    font-size: 10px;
    font-weight: 700;
}

.status-list {
    display: flex;
    flex-direction: column;
}

.status-row {
    min-height: 67px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid #edf0f4;
}

.status-row:last-child {
    border-bottom: 0;
}

.status-row-icon {
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #f2f6fb;
    color: #5f7491;
}

.status-row-icon svg {
    width: 18px;
    height: 18px;
}

.status-row strong,
.status-row span {
    display: block;
}

.status-row strong {
    color: #2c374b;
    font-size: 11px;
    font-weight: 650;
}

.status-row div > span {
    margin-top: 3px;
    color: #929aaa;
    font-size: 9px;
}

.status-row .check,
.status-row .value {
    margin-left: auto;
    color: #1769ff;
    font-size: 11px;
    font-weight: 700;
}

.activity-list {
    display: flex;
    flex-direction: column;
}

.activity-item {
    min-height: 69px;
    display: flex;
    align-items: center;
    gap: 13px;
    border-bottom: 1px solid #edf0f4;
}

.activity-item:last-child {
    border-bottom: 0;
}

.activity-marker {
    width: 35px;
    height: 35px;
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #edf4ff;
    color: #1769ff;
}

.activity-marker svg {
    width: 17px;
    height: 17px;
}

.activity-copy {
    flex: 1;
}

.activity-copy strong,
.activity-copy span {
    display: block;
}

.activity-copy strong {
    color: #2b3549;
    font-size: 11px;
    font-weight: 650;
}

.activity-copy span {
    margin-top: 3px;
    color: #929aaa;
    font-size: 9px;
}

.activity-item time {
    color: #9aa2af;
    font-size: 9px;
    white-space: nowrap;
}

.quick-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.quick-action {
    min-height: 44px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #e1e6ed;
    border-radius: 9px;
    background: #ffffff;
    color: #415067;
    font-size: 11px;
    font-weight: 650;
    text-align: left;
}

.quick-action svg {
    width: 17px;
    height: 17px;
}

.quick-action:hover {
    background: #f7f9fc;
}

.quick-action.primary {
    border-color: #1769ff;
    background: #1769ff;
    color: #ffffff;
}

.quick-action.primary:hover {
    background: #0f5de8;
}

/* Responsive */

@media (max-width: 1100px) {
    .stats-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .dashboard-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 760px) {
    .sidebar {
        display: none;
    }

    .main {
        width: 100%;
        margin-left: 0;
        padding: 22px 18px 40px;
    }

    .topbar {
        align-items: flex-start;
    }

    .user > div:last-child {
        display: none;
    }

    .stats-grid {
        grid-template-columns: 1fr;
    }

    .room-grid {
        grid-template-columns: 1fr;
    }
}
</style>
