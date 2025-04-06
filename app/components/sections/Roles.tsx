import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Roles = () => {
    return (
        <section id="roles" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Available Roles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Junior Sales Representative</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-600">
                                <li>Lead generation</li>
                                <li>Prospect outreach</li>
                                <li>Pipeline management</li>
                                <li>Entry-level position</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Senior Sales Executive</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-600">
                                <li>Account management</li>
                                <li>Strategic planning</li>
                                <li>Team leadership</li>
                                <li>3+ years experience required</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Sales Team Leader</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-600">
                                <li>Team management</li>
                                <li>Performance tracking</li>
                                <li>Training & development</li>
                                <li>5+ years experience required</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Roles 