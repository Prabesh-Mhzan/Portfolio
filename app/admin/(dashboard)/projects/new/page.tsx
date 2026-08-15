import ProjectForm from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-2xl mb-6">Add project</h1>
      <ProjectForm mode="create" />
    </div>
  );
}