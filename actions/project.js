import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function createProject(data) {
    const { userId, orgId} = auth()

    if (!userId) {
        throw new Error("User not authenticated");
    }

    if (orgId) {
        throw new Error("Organization not found");
    }

    const { data: membership } = await clerkClient().organizations.getOrganizationMembershipList({
        organizationId: organization.id
    })

    const userMembership = membership.find((member) => member.publicUserData.userId === userId)

    if (!userMembership || userMembership.role !== "org:admin") {
        throw new Error("Only admins can create projects");
    }

    try {
        const project = await db.project.create({
            data: {
                name: data.name,
                description: data.description,
                organizationId: orgId,
                key: data.key,
            }
        })

        return project;
    } catch (error) {
        console.error("Error creating project:", error);
        throw new Error("Failed to create project"); 
    }
}