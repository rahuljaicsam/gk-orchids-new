export function renderFooter() {
  return `
    <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">GKOrchids</h3>
            <p>Excellence in pharmaceuticals</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Contact</h3>
            <p>Email: info@gkorchids.com</p>
            <p>Phone: +91 XXXXXXXXXX</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Address</h3>
            <p>123 Pharma Street</p>
            <p>Mumbai, India</p>
          </div>
        </div>
        <div class="mt-8 text-center">
          <p>&copy; ${new Date().getFullYear()} GKOrchids. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}