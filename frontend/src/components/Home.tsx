import { useState } from "react";

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <>
        
            <div className={darkMode ? "dark" : ""}>


                {/* Hero Section */}
                <section className="gradient-bg min-h-screen flex items-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
                        <div className="text-center slide-in">
                            <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
                                <span className="text-green-400 mr-2">🚀</span>
                                <span className="text-white text-sm">Introducing AI-Powered Workflows</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                                Project Management<br />
                                <span className="gradient-text bg-gradient-to-r from-green-400 to-blue-400">Reimagined with AI</span>
                            </h1>
                            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                                KanbanX understands your workflow, automates repetitive tasks, and helps teams collaborate in real-time. Experience 70% faster task organization with intelligent automation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105">
                                    <i className="fas fa-rocket mr-2"></i> Get Started Free
                                </button>
                                <button className="glass text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition transform hover:scale-105">
                                    <i className="fas fa-play-circle mr-2"></i> Watch Demo
                                </button>
                            </div>
                            <div className="mt-12 flex justify-center space-x-8 text-white">
                                <div className="text-center">
                                    <div className="text-3xl font-bold">50K+</div>
                                    <div className="text-sm opacity-80">Active Users</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold">4.9/5</div>
                                    <div className="text-sm opacity-80">User Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold">99.9%</div>
                                    <div className="text-sm opacity-80">Uptime</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute top-20 left-10 floating">
                        <div className="w-20 h-20 bg-green-400 rounded-full opacity-20"></div>
                    </div>
                    <div className="absolute bottom-20 right-10 floating" style={{ animationDelay: "2s" }}>
                        <div className="w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
                    </div>
                </section>


                {/* Features Section */}
                <section id="features" className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 fade-in">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Powerful Features for Modern Teams
                            </h2>
                            <p className="text-xl text-gray-600">
                                Everything you need to manage projects efficiently, powered by AI
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-8 hover-lift cursor-pointer border border-gray-200">
                                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center mb-6">
                                    <i className="fas fa-brain text-white text-2xl"></i>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">AI-Powered Automation</h3>
                                <p className="text-gray-600 mb-4">
                                    Let AI understand your workflow and automatically organize tasks, suggest priorities, and predict bottlenecks before they happen.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li><i className="fas fa-check text-green-500 mr-2"></i>Smart task categorization</li>
                                    <li><i className="fas fa-check text-green-500 mr-2"></i>Automated priority suggestions</li>
                                    <li><i className="fas fa-check text-green-500 mr-2"></i>Predictive analytics</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl p-8 hover-lift cursor-pointer border border-gray-200">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                                    <i className="fas fa-users text-white text-2xl"></i>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Real-Time Collaboration</h3>
                                <p className="text-gray-600 mb-4">
                                    Work together seamlessly with conflict-free editing, instant updates, and smart notifications that keep everyone in sync.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li><i className="fas fa-check text-green-500 mr-2"></i>Live cursor tracking</li>
                                    <li><i className="fas fa-check text-green-500 mr-2"></i>Instant notifications</li>
                                    <li><i className="fas fa-check text-green-500 mr-2"></i>50+ concurrent users</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl p-8 hover-lift cursor-pointer border border-gray-200">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                                    <i className="fas fa-plug text-white text-2xl"></i>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Smart Integrations</h3>
                                <p className="text-gray-600 mb-4">
                                    Connect with your favorite tools. Seamless integration with Google Calendar, Slack, GitHub, and 100+ other platforms.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li><i className="fas fa-check text-green-500 mr-2"></i>Google Workspace sync</li>
                                    <li><i className="fas fa-check text-green-500 mr-2"></i>Slack notifications</li>
                                    <li><i className="fas fa-check text-green-500 mr-2"></i>API access</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Demo, Benefits, Tech Stack, Testimonials sections here – convert same way */}
                <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center text-white">
                            <h2 className="text-4xl font-bold mb-12">Why Teams Choose KanbanX</h2>
                            <div className="grid md:grid-cols-4 gap-8">
                                <div className="glass rounded-lg p-6">
                                    <div className="text-4xl font-bold mb-2">70%</div>
                                    <div className="text-lg">Faster Task Organization</div>
                                </div>
                                <div className="glass rounded-lg p-6">
                                    <div className="text-4xl font-bold mb-2">50+</div>
                                    <div className="text-lg">Concurrent Users</div>
                                </div>
                                <div className="glass rounded-lg p-6">
                                    <div className="text-4xl font-bold mb-2">2x</div>
                                    <div className="text-lg">Productivity Boost</div>
                                </div>
                                <div className="glass rounded-lg p-6">
                                    <div className="text-4xl font-bold mb-2">24/7</div>
                                    <div className="text-lg">AI Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powered by Modern Technology</h2>
                            <p className="text-xl text-gray-600">Built with the latest tools for performance and reliability</p>
                        </div>
                        <div className="overflow-hidden">
                            <div className="flex space-x-12 tech-stack-scroll">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-16 w-16 grayscale hover:grayscale-0 transition" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-16 w-16 grayscale hover:grayscale-0 transition" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-16 w-16 grayscale hover:grayscale-0 transition" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-16 w-16 grayscale hover:grayscale-0 transition" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="h-16 w-16 grayscale hover:grayscale-0 transition" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-16 w-16 grayscale hover:grayscale-0 transition" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="h-16 w-16 grayscale hover:grayscale-0 transition" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="h-16 w-16 grayscale hover:grayscale-0 transition" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-16 w-16 grayscale hover:grayscale-0 transition" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-16 w-16 grayscale hover:grayscale-0 transition" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-16 w-16 grayscale hover:grayscale-0 transition" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-16 w-16 grayscale hover:grayscale-0 transition" />
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
                    <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            © 2025 KanbanX. All Rights Reserved.
                        </span>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition">
                                Terms
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition">
                                Contact
                            </a>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default Home