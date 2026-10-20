import { ActiveSection } from "@/src/types/profile";
import { Button } from "../ui/Button";

type ProfileSidebarProps = {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
};

export default function ProfileSidebar({
  activeSection,
  onSectionChange,
}: ProfileSidebarProps) {
  return (
    <div className="min-w-0 rounded-3xl border border-olive-100 bg-white p-3 shadow-sm sm:p-4 lg:sticky lg:top-6">
      <aside>
        <h2 className="mb-3 px-3 pt-2 text-xs font-semibold tracking-wide text-olive-500 sm:text-sm">
          إدارة الحساب
        </h2>
        <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
          <button
            type="button"
            onClick={() => onSectionChange("overview")}
            aria-current={activeSection === "overview" ? "page" : undefined}
            className={`shrink-0 rounded-2xl px-4 py-3 text-right text-sm font-medium transition-colors sm:text-base lg:w-full ${
              activeSection === "overview"
                ? "bg-olive-100 text-olive-950 ring-1 ring-inset ring-olive-200"
                : "text-olive-700 hover:bg-olive-50"
            }`}
          >
            نظرة عامة
          </button>
          <button
            type="button"
            onClick={() => onSectionChange("orders")}
            aria-current={activeSection === "orders" ? "page" : undefined}
            className={`shrink-0 rounded-2xl px-4 py-3 text-right text-sm font-medium transition-colors sm:text-base lg:w-full ${
              activeSection === "orders"
                ? "bg-olive-100 text-olive-950 ring-1 ring-inset ring-olive-200"
                : "text-olive-700 hover:bg-olive-50"
            }`}
          >
            الطلبات الأخيرة
          </button>
          <button
            type="button"
            onClick={() => onSectionChange("wishlist")}
            aria-current={activeSection === "wishlist" ? "page" : undefined}
            className={`shrink-0 rounded-2xl px-4 py-3 text-right text-sm font-medium transition-colors sm:text-base lg:w-full ${
              activeSection === "wishlist"
                ? "bg-olive-100 text-olive-950 ring-1 ring-inset ring-olive-200"
                : "text-olive-700 hover:bg-olive-50"
            }`}
          >
            المفضلة
          </button>
          <button
            type="button"
            onClick={() => onSectionChange("cart")}
            aria-current={activeSection === "cart" ? "page" : undefined}
            className={`shrink-0 rounded-2xl px-4 py-3 text-right text-sm font-medium transition-colors sm:text-base lg:w-full ${
              activeSection === "cart"
                ? "bg-olive-100 text-olive-950 ring-1 ring-inset ring-olive-200"
                : "text-olive-700 hover:bg-olive-50"
            }`}
          >
            السلة
          </button>
          <button
            type="button"
            onClick={() => onSectionChange("address")}
            aria-current={activeSection === "address" ? "page" : undefined}
            className={`shrink-0 rounded-2xl px-4 py-3 text-right text-sm font-medium transition-colors sm:text-base lg:w-full ${
              activeSection === "address"
                ? "bg-olive-100 text-olive-950 ring-1 ring-inset ring-olive-200"
                : "text-olive-700 hover:bg-olive-50"
            }`}
          >
            العناوين
          </button>
          <button
            type="button"
            onClick={() => onSectionChange("profile")}
            aria-current={activeSection === "profile" ? "page" : undefined}
            className={`shrink-0 rounded-2xl px-4 py-3 text-right text-sm font-medium transition-colors sm:text-base lg:w-full ${
              activeSection === "profile"
                ? "bg-olive-100 text-olive-950 ring-1 ring-inset ring-olive-200"
                : "text-olive-700 hover:bg-olive-50"
            }`}
          >
            المعلومات الشخصية
          </button>
        </nav>
        <div className="mt-3 border-t border-olive-100 pt-3 lg:mt-4 lg:pt-4">
          <Button className="!w-full !rounded-2xl" variant="outlinePrimary">
            تسجيل الخروج
          </Button>
        </div>
      </aside>
    </div>
  );
}
