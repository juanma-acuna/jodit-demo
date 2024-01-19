const close_icon = `&nbsp;<i class="red-icon" onclick="this.parentNode.remove()"><b>×</b></i>`;

const alert_icon = `<i class="alert-icon" onclick="this.parentNode.remove()"><b>⚠</b></i>&nbsp;`;

const initial_value = `<p style="line-height: 1.5">
Hello <span style="padding: 2px 7px; border-radius: 4px;" class="color-4 tooltip" contenteditable="false" data-value="__lead_first_name__" draggable="true" ondrop="event.stopPropagation();" data-tooltip="Lead first name tooltip">&lt;Lead first name&gt;${close_icon}</span>
<p>My name is 你好世界 <span style="padding: 2px 7px; border-radius: 4px;" class="color-2 tooltip" contenteditable="false" data-value="__sp_groomed__" draggable="true" ondrop="event.stopPropagation();" data-tooltip="Rep name tooltip">&lt;Rep Name&gt;${close_icon}</span> and I am the <span style="padding: 2px 7px; border-radius: 4px;" class="color-5 tooltip" contenteditable="false" data-value="__var_outreach_context__" draggable="true" ondrop="event.stopPropagation();" data-tooltip="Outreach context tooltip">&lt;Outreach Context&gt;${close_icon}</span> at <span style="padding: 2px 7px; border-radius: 4px;" class="color-1 tooltip" contenteditable="false" data-value="__company_name__" draggable="true" ondrop="event.stopPropagation();" data-tooltip="Company name tooltip">&lt;Company Name&gt;${close_icon}</span>. こんにちは世界</p>
<p>I am reaching out to you because I noticed that you have not yet signed up for our service.</p> 
<p>I would love to help you get started, and I want to make you <span style="padding: 2px 7px; border-radius: 4px;" class="color-3 tooltip ${alert_icon ? 'alert' : ''}" contenteditable="false" data-value="__million_dollars__" draggable="true" ondrop="event.stopPropagation();" data-tooltip="Hey, we have a problem here...">${alert_icon}&lt;Win a Million Dollars!&gt;${close_icon}</span></p>
<p>Are you available for a quick call on <span style="padding: 2px 7px; border-radius: 4px;" class="color-9 tooltip" contenteditable="false" data-value="__inquiry_date__" draggable="true" ondrop="event.stopPropagation();" data-tooltip="Inquiry date tooltip">&lt;Inquiry Date&gt;${close_icon}</span>?</p>
</p>`;

const names = [
  { key: `@company_name`, value: `<span style="padding: 2px 7px; border-radius: 4px;" class="color-1 tooltip" contenteditable="false" data-value="__company_name__" draggable="true" ondrop="event.stopPropagation();" data-tooltip="Company name tooltip">&lt;Company Name&gt;${close_icon}</span>` },
  { key: `@inquiry_date`, value: `<span style="padding: 2px 7px; border-radius: 4px;" class="color-9 tooltip" contenteditable="false" data-value="__inquiry_date__" draggable="true" ondrop="event.stopPropagation();" data-tooltip="Inquiry date tooltip">&lt;Inquiry Date&gt;${close_icon}</span> ` },
  { key: `@customer_last_name`, key2: `@lead_last_name`, value: `<span style="padding: 2px 7px; border-radius: 4px;" class="color-0 tooltip" contenteditable="false" data-value="__customer_last_name__" draggable="true" ondrop="event.stopPropagation();" data-tooltip="Lead last name tooltip">&lt;Lead Last Name&gt;${close_icon}</span> ` },
  { key: `@var_outreach_context`, value: `<span style="padding: 2px 7px; border-radius: 4px;" class="color-5 tooltip" contenteditable="false" data-value="__var_outreach_context__" draggable="true" ondrop="event.stopPropagation();" data-tooltip="Outreach context tooltip">&lt;Outreach Context&gt;${close_icon}</span>` },
  { key: `@sp_groomed`, key2: `@rep_name`, value: `<span style="padding: 2px 7px; border-radius: 4px;" class="color-2 tooltip" contenteditable="false" data-value="__sp_groomed__" draggable="true" ondrop="event.stopPropagation();" data-tooltip="Rep name tooltip">&lt;Rep Name&gt;${close_icon}</span>` },
  { key: `@million_dollars`, key2: `@win`, value: `<span style="padding: 2px 7px; border-radius: 4px;" class="color-3 tooltip ${alert_icon ? 'alert' : ''}" contenteditable="false" data-value="__million_dollars__" draggable="true" ondrop="event.stopPropagation();" data-tooltip="Hey, we have a problem here...">${alert_icon}&lt;Win a Million Dollars!&gt;${close_icon}</span>` },
  { key: `@lead_first_name`, value: `<span style="padding: 2px 7px; border-radius: 4px;" class="color-4 tooltip" contenteditable="false" data-value="__lead_first_name__" draggable="true" ondrop="event.stopPropagation();" data-tooltip="Lead first name tooltip">&lt;Lead first name&gt;${close_icon}</span>` },
];

export { initial_value, names };

