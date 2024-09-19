<script lang="ts">
  import { onMount } from 'svelte';
  export let currentDate!: Date;
  export let shows!: { title: string; date: Date }[];

  let weeks: Date[][] = [];

  onMount(() => {
    generateCalendar(currentDate);
  });

  function generateCalendar(date: Date) {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const startDay = startOfMonth.getDay();
    const endDay = endOfMonth.getDate();

    let days: Date[] = [];
    for (let i = 1 - startDay; i <= endDay; i++) {
      days.push(new Date(date.getFullYear(), date.getMonth(), i));
    }

    while (days.length % 7 !== 0) {
      days.push(new Date(date.getFullYear(), date.getMonth(), days.length - startDay + 1));
    }

    weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
  }
</script>

<h3 class="text-2xl font-bold text-center">
  {currentDate.toLocaleString('default', { month: 'long' })}
  {currentDate.getFullYear()}
</h3>

<div class="flex justify-center space-x-4 mt-2">
  <div class="flex items-center space-x-2">
    <div class="w-4 h-4 bg-emerald-300 rounded"></div>
    <span>Show</span>
  </div>
  <div class="flex items-center space-x-2">
    <div class="w-4 h-4 bg-cyan-300 rounded"></div>
    <span>New Music</span>
  </div>
</div>

<div class="select-none grid grid-cols-7 gap-2 md:gap-5 px-2 md:px-5 py-2 text-center font-bold">
  {#each ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as day}
    <div>{day}</div>
  {/each}
</div>

<div class="grid grid-cols-7 gap-2 md:gap-4 px-2 md:px-5">
  {#each weeks as week}
    {#each week as day}
      <div
        class="hover:cursor-pointer hover:text-cyan-500 hover:bg-orange-300 duration-300 md:text-xl select-none p-1 md:p-2 text-center ring-2 ring-orange-300 rounded-md
        {shows.some(show => show.date.getDate() === day.getDate() && show.date.getMonth() === day.getMonth())
          ? 'bg-emerald-300 hover:bg-emerald-500 hover:ring-emerald-500 hover:text-slate-900'
          : ''}
        {day.getDate() === currentDate.getDate() ? 'text-cyan-500 bg-orange-300' : ''}
        {day.getMonth() !== currentDate.getMonth() ? 'text-gray-700' : ''}"
      >
        {day.getDate()}
      </div>
    {/each}
  {/each}
</div>
