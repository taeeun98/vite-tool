import { renderMemo, type MemoData } from "../card";
import { main } from "../main";
import type { Tables } from "../supabase/database.types";
import { supabase } from "../supabase/supabase";
import { gsap } from "gsap";

// import type { Database, Tables } from "../supabase/database.types"

export async function fetchMemo() {
  const { data, error } = await supabase
  .from("memo")
  .select()
  .order('position', {ascending:true});

  main.innerHTML = "";
  // let a:Tables<'memo'>['priority']
  // console.log(data);

  // let a: Database['public']['Tables']['memo']['Row']
  // let a: Tables<'memo'>['priority']

  data &&
    data.forEach((d) => {
      renderMemo(main, d);
    });
}

export async function deleteMemo(id: number) {
  // 여기서 삭제하고 select 하는 이유 = 삭제대상 선택해서 가져올수도 있다는 의미. 안써도됨
  const response = await supabase.from("memo").delete().eq("id", id).select();

  fetchMemo();
  sortMemo();
  // console.log(data);
}

export async function insertMemo({
  title,
  description,
  priority,
  position
}: Pick<Tables<"memo">, "title" | "description" | "priority" | "position">) {
  const { error } = await supabase.from("memo").insert({
    title,
    description,
    priority,
    position
  });

  fetchMemo();

  const tl = gsap
    .timeline()
    .to(".pop", { y: "100%", ease: "power3.inOut" })
    .to("#dialog", { autoAlpha: 0, duration: 0.2 });
}

export function sortMemo() {
  const sortedItems = document.querySelectorAll('article');

  sortedItems.forEach(async(item, index) =>{
    await supabase
    .from('memo')
    .update({position:index})
    .eq('id', +item.dataset.id!)
  })
}