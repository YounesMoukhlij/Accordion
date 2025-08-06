document.addEventListener('DOMContentLoaded', function()
{
    const headers = document.querySelectorAll('.header');

    headers.forEach(header =>
    {
        header.addEventListener('click', function()
        {
            const accordionItem = this.parentElement;
            const content = accordionItem.querySelector('.content');
            const isActive = accordionItem.classList.contains('active')

            document.querySelectorAll('.accordion-item').forEach(btn =>
            {
                btn.classList.remove('active')
                btn.querySelector('.content').style.display = 'none'

            });

            if (!isActive)
            {
                accordionItem.classList.add('active');
                content.style.display = 'block'

            }
        })
    });
});

