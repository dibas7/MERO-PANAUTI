import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface ExtraItem {
  id: string;
  title: string | null;
  description: string | null;
  image_url: string | null;
  meta: string | null;
  sort_order: number;
}

export function useExtraContent(category: "place" | "culture" | "food" | "gallery") {
  const [items, setItems] = useState<ExtraItem[]>([]);

  useEffect(() => {
    let mounted = true;
    supabase
      .from("content_items")
      .select("id,title,description,image_url,meta,sort_order")
      .eq("category", category)
      .order("sort_order", { ascending: true })
      .then(({ data }) => {
        if (mounted) setItems((data ?? []) as ExtraItem[]);
      });
    return () => {
      mounted = false;
    };
  }, [category]);

  return items;
}
